function TravelCard({id, destination, imageLink, duration, rating, price}) {
    console.log("id, destination; ", id, destination);
    return (

          <div key={id}>
            <h2> {destination}</h2>
            <img src={imageLink} alt={`Picture of ${destination}`} className="imgCity"/>
            <p> Starting from {`${price}`}€</p>
            <p> {duration} days</p>
            <p>{rating} / 5 </p>
            </div>
            );

}

export default TravelCard;