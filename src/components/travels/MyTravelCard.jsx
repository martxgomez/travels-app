import { Link } from "react-router-dom";

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
   
    </article>
  );
}

export default MyTravelCard;
