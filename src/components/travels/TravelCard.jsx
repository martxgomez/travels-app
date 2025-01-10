import { Link } from "react-router-dom";

function TravelCard({
  id,
  destination,
  imageLink,
  duration,
  rating,
  price,
  addFavorite,
  isFavorite,
}) {
  console.log("id, destination; ", id, destination);
  return (
    <article className="travel-card">
      <Link to={`/travels/${id}`} className="card">
        <div key={id}>
          <img
            src={imageLink}
            alt={`Picture of ${destination}`}
            className="imgCity"
          />
          <div className="title-rating-container">
            <h2>{destination}</h2>
            <div className="rating">⭐ {rating}/5</div>
          </div>

          <p> Starting from {`${price}`}€</p>
          <p> {duration} days</p>
        </div>
      </Link>
      <button onClick={() => addFavorite(id)} className="fav-btn">
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
}

export default TravelCard;
