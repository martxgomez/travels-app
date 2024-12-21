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
        setError("Travel not found!");
      } else {
        setTravel(data);
      }
      setLoading(false);
    };

    fetchTravel();
  }, [travelId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="details-page">
      <h2>Details for {travel.destination}</h2>
      <img
        src={travel.imageLink}
        alt={travel.destination}
        className="travel-image"
      />
      <p>
        <strong>Description:</strong> {travel.description}
      </p>
      <p>
        <strong>Price:</strong> ${travel.price}
      </p>
      <p>
        <strong>Start Date:</strong> {travel.start_date}
      </p>
      <p>
        <strong>End Date:</strong> {travel.end_date}
      </p>

      <Link to="/" className="back-btn">
        Back
      </Link>
    </div>
  );
}

export default DetailsPage;
