
import {useState,useEffect,useRef} from 'react'
import {getMovies} from '../Services/Movie.service'
import { Movie } from '../Models/Movie'
import { ListMovies } from '../Components/ListMovies'
export function MoviesScreen() {
const [movies,setMovies] = useState<Movie[]>([])

const [searchText,setSearchText] = useState('')
const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        console.log("efecto")
        getMovies(searchText).then((movies)=>{
            setMovies(movies)
        })
    },[searchText])

    const handleClick = () => {  
        const value = inputRef?.current?.value
        setSearchText(value || '')
    }

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Movies</h1>
         
                <input type="text" ref={inputRef}  placeholder="Search for a movie"/>
                <button onClick={handleClick}>Search</button>
                {movies.length>0 ? <ListMovies Movies={movies}/>:<p>No movies found</p>}

           
        </div>
    )
}