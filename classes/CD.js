const { Media } = require('./Media.js');

class CD extends Media {
  constructor(title, artist, releaseYear, genre, label) {
    super(title, releaseYear, genre);
    this._artist = artist;
    this._label = label;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get label() {
    return this._label;
  }
  get songs() {
    if (this._songs === []) {
      return "No song available";
    } else {
      return this._songs.forEach((song) => console.log(song));
    }
  }
  get releaseYear() {
    return this._releaseYear;
  }
  addSongs(...songs) {
    [...songs].forEach((song) => this._songs.push(song));
  }
  shuffle() {
    const randomNum = () => Math.floor(Math.random() * this._songs.length);
    const shuffleSongs = [];
    const songsLength = this._songs.length;
    while (shuffleSongs.length < songsLength) {
      const nextSong = this._songs[randomNum()];
      if (!shuffleSongs.includes(nextSong)) {
        shuffleSongs.push(nextSong);
      }
    }
    return shuffleSongs.forEach((song) => console.log(song));
  }
  info() {
    const details = `Title: ${this._title}
			Artist: ${this._artist}
			Year of Release: ${this._releaseYear}
			Genre: ${this._genre}
			Label: ${this._label}`;

    return details;
  }
}

module.exports.CD = CD;