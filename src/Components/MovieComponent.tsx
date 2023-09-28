import { useState,useEffect } from "react";
import { Movie } from "../Models/Movie";
interface MovieProps {   
    Data:Movie
}

export default function MovieComponent ({Data}:MovieProps){

    return (
        <div key={Data.imdbID}>
        <h3>{Data.Title}</h3>
        <p>{Data.Year}</p>
        <p>{Data.Type}</p>
        <img src={Data.Poster} alt={Data.Title}/>
        </div>
    )
}