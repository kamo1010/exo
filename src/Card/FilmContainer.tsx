import { useState } from "react";
import Film from "../Data/Film";
import FilmCard from "./FilmCard";
import './FilmContainer.css';

function FilmContainer(value : {films : Film[]}) {
    const [movies, setMovies] = useState(value.films);

    const deleteFilm = (index : string) => {
        movies.splice(parseInt(index) - 1, 1);
        return movies;
    }

    return (
        <div className="container">
            {
                movies.map(f => {
                    return <FilmCard key={f.id} film={f} update={(id: string) => setMovies(deleteFilm(id))}/>
                })
            }
        </div>
    )
}

export default FilmContainer