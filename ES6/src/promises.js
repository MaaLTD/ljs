'use strict';

let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            resolve(json.Search);
        } else {
            reject(xhr.statusText);
        }
    };

    xhr.onerror = (error) => {
        reject(error);
    };

    xhr.send();
    });
}

let search = 'batman';

getData(`http://www.omdbapi.com/?i=tt3896198&apikey=44c5786e&s=${search}`)
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));