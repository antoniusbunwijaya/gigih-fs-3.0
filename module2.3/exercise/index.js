const Playlist = require('./model/playlist');

const express = require('express');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded());

const playlist = new Playlist();
playlist.addSong(
    'HOMURA(From "Kimetsu No Yaiba Movie: Mugen Train")[First Take Version]',
    'ShiroNeko',
    'https://open.spotify.com/track/05WmuNbm8RcgcLtr2YEsoG?si=0711334d412e4355'
)
playlist.addSong(
    'STAY-Japanase Version',
    'ShiroNeko',
    'https://open.spotify.com/track/52Xwn8rsvU0JfJbjPs89te?si=16d9386ada1f4a7a'
)

// get list songs playlist
app.get('/songs/playlist', (req, res) => {
    console.log('get list songs playlist');
    return res.send(playlist.getAllSongs());
});

// add song to playlist
app.post('/songs/playlist', (req,res)=>{
    console.log('add song to playlist');
    const {title, artist, url} = req.body;
    playlist.addSong(title, artist, url);
    return res.send(201);
});

// play songs from playlist
app.get('/songs/playlist/play', (req,res)=>{
    console.log("play songs from playlist");
    return res.send(playlist.getAllSongs().map(song => song.url ));
});

// add count at play song from playlist
app.get('/songs/playlist/play/:id', (req,res)=>{
    console.log("add count at play song from playlist");
    const id = parseInt(req.params.id);
    const {url} = playlist.getSong(id);
    return res.send(url);
});

// sorted song from playlist by play most
app.get('/songs/playlist/play-most', (req,res)=>{
    console.log('sorted song from playlist by play most');
    return res.send(playlist.getSongPlayMost());
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
