const { Media } = require("./Media.js");

class Movie extends Media {
  constructor(title, director, releaseYear, runTime, distributor, genre) {
    super(title, releaseYear, genre);
    this._director = director;
    this._runTime = runTime;
    this._distributor = distributor;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get distributor() {
    return this._distributor;
  }
  info() {
    const details = `Title: ${this._title}
        Director: ${this._director}
        Year of Release: ${this._releaseYear}
        Run Time: ${this._runTime}
        Distributor: ${this._distributor}
        Genre: ${this._genre}`;

    return details;
  }
}

module.exports.Movie = Movie;