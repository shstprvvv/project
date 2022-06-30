let number0fFilms;

function start() {
    number0fFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while (number0fFilms == ' ' || number0fFilms == null || isNaN(number0fFilms )) {
        number0fFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    } 
}

start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?' , ''),
              b = prompt('На сколько оцените его?' , '');
         
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b; 
            console.log('done');    
        } else {
            console.log('error');
            i--;
        }    
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено слишком мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под  номеров ${i}`);
    }
}

writeYourGenres();

