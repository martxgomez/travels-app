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
          <h2> {destination}</h2>
          <img
            src={imageLink}
            alt={`Picture of ${destination}`}
            className="imgCity"
          />
          <p> Starting from {`${price}`}€</p>
          <p> {duration} days</p>
          <p>{rating} / 5 </p>
        </div>
      </Link>
      <button onClick={() => addFavorite(id)} className="fav-btn">
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </article>
  );
}

export default TravelCard;
