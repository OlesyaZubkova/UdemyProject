"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function addMovie() {
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
      personalMovieDB.movies[lastSeenMovie] = lastRatedMovie;
    } else {
      console.log("error");
      i--;
    }
  }
}

addMovie();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("\n Просмотрено довольно мало фильмов \n");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("\n Вы классический зритель \n");
  } else if (personalMovieDB.count >= 30) {
    console.log("\n Вы киноман \n");
  } else {
    console.log("\n Произошла ошибка \n");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`));
  }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);

// console.log(personalMovieDB);
