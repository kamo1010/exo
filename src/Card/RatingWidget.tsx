import Film from "../Data/Film";
import './RatingWidget.css';

function RatingWidget(data : {film : Film}) {
    const filmData = data.film
    return (
        <div className="rating">
        <p>{filmData.likeRatio}%</p>
        <progress value={filmData.likeRatio} max="100"/>
        </div>
    );
}

export default RatingWidget;