class Catalog {
  constructor() {
    this._allBooks = [];
    this._allMovies = [];
    this._allCDs = [];
  }
  addBooks(book) {
    this._allBooks.push(book);
  }
  showBooks() {
   return this._allBooks;
  }
  addMovies(movie) {
    this._allMovies.push(movie);
  }
  showMovies() {
    return this._allMovies;
  }
  addCds(cd) {
    this._allCDs.push(cd);
  }
  showCds() {
    return this._allCDs;
  }
}

module.exports.Catalog = Catalog;
