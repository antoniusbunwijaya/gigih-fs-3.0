class Song {
    constructor(id, title, artist, url, countPlay = 0) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.url = url;
        this.countPlay = countPlay;
    }

    
}

module.exports = Song;
