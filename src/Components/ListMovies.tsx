import MovieC from './MovieComponent'
import { Movie } from "../Models/Movie";
interface MovieProps {
    Movies:Movie[]
}

export function ListMovies ({Movies}:MovieProps){

    return (
        <div>
           {Movies.map((movie,index)=>(
                <MovieC Data={movie} key={movie.imdbID}/>
           ))}
        </div>
    )

}