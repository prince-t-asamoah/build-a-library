class Media {
  constructor(title, releaseYear, genre) {
    this._title = title;
    this._releaseYear = releaseYear;
    this._genre = genre;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get releaseYear() {
    return this._releaseYear;
  }
  get genre() {
    return this._genre;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  getAverageRating() {
    const totalRatings = this._ratings.reduce(
      (currentRating, accumulatedRating) => {
        return currentRating + accumulatedRating;
      }
    );
    return totalRatings / this._ratings.length;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut === false
      ? (this._isCheckedOut = true)
      : (this._isCheckedOut = false);
  }
  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this._ratings.push(rating);
    } else {
      console.log("Rating should be between 1 and 5");
    }
  }
}

module.exports.Media = Media;