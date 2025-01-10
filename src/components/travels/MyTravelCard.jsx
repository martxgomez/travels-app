import { Link } from "react-router-dom";
import "./MyTravelCard.css"

function MyTravelCard({
  id,
  destination,
  imageLink,
  duration,
  rating,
  price,
}) {
  console.log("id, destination; ", id, destination);
  return (
    <article className="travel-card">
    <Link to={`/my-trips/${id}`} className="card">
      <div>
        <img
          src={imageLink}
          alt={`Picture of ${destination}`}
          className="imgCity"
        />
        <div className="title-rating-container">
            <h2>{destination}</h2>
            <div className="rating">⭐ {rating}/5</div>
          </div>
        <p>{duration} días</p>
        <p>{price}€</p>
      </div>
    </Link>
  </article>
  );
}

export default MyTravelCard;
