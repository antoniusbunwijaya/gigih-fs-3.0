const Song = require('../song');

class Playlist {
    constructor() {
        this.songs = [];
    }

    addSong(title, artist, url) {
        const song = new Song(this.getLastId(), title, artist, url);
        this.songs.push(song);
    }

    getAllSongs() {
        return this.songs;
    }

    getSong(id){
        const songIndex = this.songs.findIndex(item => (item.id === id));
        if(this.songs[songIndex].countPlay === 0){
            this.songs[songIndex].countPlay = 1;
        }else {
            this.songs[songIndex].countPlay += 1;
        }

        return this.songs[songIndex];
    }

    getSongPlayMost(){
        return this.songs.sort((a, b) => { return b.countPlay - a.countPlay });
    }

    getLastId() {
        return this.songs.length + 1;
    }

}
module.exports = Playlist;

