const { Media } = require('./Media.js');

class Book extends Media {
  constructor(title, author, releaseYear, publisher, pages, genre) {
    super(title, releaseYear, genre);
    this._author = author;
    this._pages = pages;
    this._publisher = publisher;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  get publisher() {
    return this._publisher;
  }
  info() {
    const details = `
					Title: ${this._title}
        Author: ${this._author}
        Year of Release: ${this._releaseYear}
        Publisher: ${this._publisher}
        Pages: ${this._pages}
        Genre: ${this._genre}`;
    return details;
  }
}

module.exports.Book = Book;