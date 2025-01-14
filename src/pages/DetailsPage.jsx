//hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//data
import supabase from "../supabase/config.js";

//css
import "./DetailsPage.css";

function DetailsPage() {
  const { travelId } = useParams();
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTravel = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("travels")
        .select("*")
        .eq("id", travelId)
        .single();

      if (error) {
        console.error("Error fetching travel:", error.message);
        setError("Travel not found!"); // muy buena práctica añadir feedback al usuario en caso de error
      } else {
        setTravel(data);
      }
      setLoading(false);
    };

    fetchTravel();
  }, [travelId]); // buen punto añadir travelId como dependencia, esto hará que se ejecute el useEffect cada vez que cambie el travelId

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="details-page">
      <img
        src={travel.imageLink}
        alt={travel.destination}
        className="travel-image"
      />
      <section className="content-container">
       <h2>{travel.destination}</h2>
      <section className="details-container">
       

        <section className="info-column1">
          <article className="title">
            <strong>Activities</strong>
          </article>
          <article className="info">
            {travel.activities.map((activity) => (
              <div key={Math.random()}>
                <ul>
                  <li>{activity}</li>
                </ul>
              </div>
            ))}
          </article>

          <article className="title">
            <strong>Places to visit</strong>
          </article>
          <article className="info">
            {travel.places.map((place) => (
              <div key={Math.random()}>
                <ul>
                  <li>{place}</li>
                </ul>
              </div>
            ))}
          </article>
          <article className="title">
            <strong>Notes</strong>
          </article>
          <article className="info">{travel.notes}</article>
        </section>

        <section className="info-column2">
          <article className="title">
            <strong>Duration</strong>
          </article>
          <article className="info">{travel.duration} Days</article>

          <article className="title">
            <strong>Price</strong>
          </article>
          <article className="info">{travel.price} €</article>
          <Link to="/" className="back-btn">
          Back
        </Link>
        </section>
        </section>

       
      </section>
    </div>
  );
}

export default DetailsPage;
