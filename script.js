"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function() {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  addMovie: function() {
    for (let i = 0; i < 2; i++) {
      const lastSeenMovie = prompt(
        "Один из последних просмотренных фильмов?",
        ""
      ).trim();
      const lastRatedMovie = prompt("На сколько оцените его?", "");

      if (
        lastSeenMovie != null &&
        lastRatedMovie != null &&
        lastSeenMovie != "" &&
        lastRatedMovie != "" &&
        lastSeenMovie.length < 50
      ) {
        this.movies[lastSeenMovie] = lastRatedMovie;
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectPersonalLevel: function() {
    if (this.count < 10) {
      console.log("\n Просмотрено довольно мало фильмов \n");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("\n Вы классический зритель \n");
    } else if (this.count >= 30) {
      console.log("\n Вы киноман \n");
    } else {
      console.log("\n Произошла ошибка \n");
    }
  },

  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let favGenre = prompt(`Ваш любимый жанр под номером ${i}?`);
      if (favGenre === '' || favGenre === null) {
        console.log('Error');
        i--;
      } else {
        this.genres[i - 1] = favGenre;
      }
    }

    this.genres.forEach((genre, i) => {
      console.log(`Любимый жанр #${i + 1} это ${genre}`);
    });

  },

  toggleVisibleMuDB: function() {
    this.privat ? this.privat = false : this.privat = true;
  }
};

console.log(personalMovieDB.start());
console.log(personalMovieDB.addMovie());
console.log(personalMovieDB.detectPersonalLevel());
console.log(personalMovieDB.showMyDB(personalMovieDB.privat));
console.log(personalMovieDB.writeYourGenres());
console.log(personalMovieDB.toggleVisibleMuDB(personalMovieDB.privat));

console.log(personalMovieDB)