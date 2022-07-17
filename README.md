# Build A Library

A library called **Books-N-Stuff** uses index cards to organize their content.  
Books-‘N-Stuff stores three different types of media content:

- Books
- Music CDs
- Movies

Using Javascript, this project modernizes the library system with Javascript classes starting with a parent class named `Media`  
and three subclasses: `Book`, `Movie`, and `CD` which extends the `Media` class have being implemented.  
Another class named `Catalog` is  implemented to store the entire library media for easy access.  

**NB**: All the classes can be found inside the `classes` folder together with a sample media data in the `data.js` file.

## Structure

The classes have following properties and methods:

### Media

- **Properties**: `title` (string), `releaseYear` (number), `genre` (string), `isCheckedOut` (boolean initially false), `ratings` (array, initially empty).
- **Getter**: all properties have a getter
- **Methods**: `getAverageRating()`, `toggleCheckOutStatus()`, `addRating()`.

### Book

- **Properties**: `author` (string), `pages` (number), and `ratings` (array, initially empty) and all properties from the **Media** class.
- **Getters**: all properties have a getter
- **Methods**: `info()` and all methods from the **Media** class.

### Movie

- **Properties**: `director` (string), `runTime` (number) and `distributor` (string).
- **Getters**: all properties have a getter
- **Methods**: `info()` and all methods from the **Media** class.

### CD

- **Properties**: `artist` (string), `songs` (array of strings)
- **Getters**: all properties have a getter
- **Methods**: `info()` and all methods from the **Media** class.

## Catalog

- **Properties**: `allBooks` (array of objects), `allMovies` (array of objects), and `allCDs` (array of objects);
- **Methods**: `addBooks(book)`, `showBooks()`, `addMovies(movie)`, `showMovies()`, `addCds(cd)` and `showCds()`.

## Usage

Run the library system, using this command: `node main.js`.