//hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

//data
import supabase from "../supabase/config.js";

//css
import "./MyTravelsDetailsPage.css";

function MyTravelsDetailsPage({ deleteTravel }) {
  const { travelId } = useParams();
  const [travel, setTravel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTravel = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("mytrips")
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

  const handleDelete = async () => {
    await deleteTravel(travelId);
    navigate("/my-trips");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="details-page">
      <button onClick={() => setShowConfirmation(true)} className="btn-delete">
        x
      </button>

      {/* pop-up window to double-check if the user wants to delete de travel */}
      {showConfirmation && (
        <div className="pop-up-container">
          <div className="pop-up-content">
            <h3>Are you sure you want to delete this travel?</h3>
            <div className="pop-up-buttons">
              <button
                onClick={() => setShowConfirmation(false)}
                className="btn-cancel"
              >
                NO
              </button>
              <button onClick={handleDelete} className="btn-confirm">
                YES
              </button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => navigate(`/edit-travel/${travelId}`)}>Edit</button>
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
        <strong>Price:</strong> €{travel.price}
      </p>
      <p>
        <strong>Duration:</strong> {travel.duration}
      </p>
      <p>
        <strong>Activities:</strong>
      </p>
      {travel.activities.map((activity) => (
        <div key={Math.random()}>
          <ul>
            <li>{activity}</li>
          </ul>
        </div>
      ))}

      <p>
        <strong>Places:</strong>
      </p>
      {travel.places.map((place) => (
        <div key={Math.random()}>
          <ul>
            <li>{place}</li>
          </ul>
        </div>
      ))}
      <p>
        <strong>Notes:</strong> {travel.notes}
      </p>

      <Link to="/my-trips" className="back-btn">
        Back
      </Link>
    </div>
  );
}

export default MyTravelsDetailsPage;
