import { Movie } from "../Models/Movie";

export function getMovies(text:string): Promise<Movie[]> {
    if(text.length==0) return Promise.resolve([]);
    return fetch(`http://www.omdbapi.com/?s=${text}&apikey=b77c368d`)
        .then(response => response.json())
        .then(data => data.Search);
}