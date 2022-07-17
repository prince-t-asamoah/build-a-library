const { Book } = require('./classes/Book.js');
const { Movie } = require("./classes/Movie.js");
const { CD } = require("./classes/CD.js");
const { Catalog } = require('./classes/Catalog.js');
const { books, movies, cds } = require('./data.js');

/*=====================BOOKS========================*/
const book1 = books.historyOfEverything;
const book2 = books.thinkBig;

// Create books class instance
const historyOfEverything = new Book(...book1);
const thinkBig = new Book(...book2);

//Add ratings to books
historyOfEverything.addRating(4);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
thinkBig.addRating(5);
thinkBig.addRating(5);
thinkBig.addRating(4);

/*=====================MOVIES========================*/
const movie1 = movies.speed;
const movie2 =  movies.theMatrix;

//Create movies class instance
const speed = new Movie(...movie1);
const theMatrix = new Movie(...movie2);

//Add ratings to movies
speed.addRating(3);
speed.addRating(5);
speed.addRating(5);
theMatrix.addRating(5);
theMatrix.addRating(4);
theMatrix.addRating(3);

/*=====================CDS========================*/
const cd1 = cds.nothingButTheBeat;
const cd2 = cds.toPimpAButterfly;

//Create CD class instance
const nothingButTheBeat = new CD(...cd1);
const pimpAButterfly = new CD(...cd2);

//Add songs to cds
nothingButTheBeat.addSongs('Little Bad Girl feat. Taio Cruz');
nothingButTheBeat.addSongs("Titanium feat. Sia");
nothingButTheBeat.addSongs('Without You feat. Usher');
nothingButTheBeat.addSongs('Nothing Really Matters feat. Will.i.am');


pimpAButterfly.addSongs('King Kunta');
pimpAButterfly.addSongs("Hood Politics");
pimpAButterfly.addSongs("King Kunta");

//Add ratings to cds
nothingButTheBeat.addRating(5);
nothingButTheBeat.addRating(5);
nothingButTheBeat.addRating(5);

pimpAButterfly.addRating(4);
pimpAButterfly.addRating(5);
pimpAButterfly.addRating(4);

/*=====================CATALOG========================*/
//Add books, movies and cds to catalog
const library = new Catalog();
library.addBooks(historyOfEverything);
library.addBooks(thinkBig);

library.addMovies(speed);
library.addMovies(theMatrix);

library.addCds(nothingButTheBeat);
library.addCds(pimpAButterfly);

//Show library contents
console.log(library.showBooks());
console.log(library.showMovies());
console.log(library.showCds());