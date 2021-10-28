import Film from "../Data/Film";
import RatingWidget from "./RatingWidget";
import './FilmCard.css';

function FilmCard(props : {key : string, film : Film, update : (id: string) => void}) {
    const filmData = props.film;

    return (
        <div className="card" id={props.key}>
            <div className="label">
                <p className="title"><b>{filmData.title}</b></p>
                <button className="delete" id={filmData.id} onClick={() => props.update(filmData.id)}>
                    <img src={process.env.PUBLIC_URL + "/icons8-cancel-64.png"} alt="delete"/>
                </button>
            </div>
            <p className="category">{filmData.category}</p>
            <RatingWidget film={filmData}/>
        </div>
    );
}



export default FilmCard;