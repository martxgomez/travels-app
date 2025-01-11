import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../supabase/config.js";

function UpdateForm() {
  const { travelId } = useParams();
  const navigate = useNavigate();
  const [travel, setTravel] = useState({
    destination: "",
    description: "",
    price: "",
    duration: "",
    activities: [],
    places: [],
    notes: "",
    imageLink: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get the info from supabase to have a background to edit
    const fetchTravel = async () => {
      const { data, error } = await supabase
        .from("mytrips")
        .select("*")
        .eq("id", travelId)
        .single();

      if (error) {
        console.error("Error fetching travel:", error.message);
      } else {
        setTravel(data);
      }
      setLoading(false);
    };

    fetchTravel();
  }, [travelId]);

  //function to update the changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTravel({ ...travel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("mytrips")
        .update({
          destination: travel.destination,
          price: travel.price,
          duration: travel.duration,
          activities: travel.activities,
          places: travel.places,
          notes: travel.notes,
          imageLink: travel.imageLink,
        })
        .eq("id", travelId);

      if (error) throw error;

      navigate(`/my-trips/${travelId}`);
    } catch (error) {
      console.error("Error updating travel:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  //here starts the update form labels
  return (

    <div className="update-form">
      <h2>Edit Travel</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            name="destination"
            value={travel.destination}
            onChange={handleChange}
          />
        </label>

        <label>
          Price (€):
          <input
            type="number"
            name="price"
            value={travel.price}
            onChange={handleChange}
          />
        </label>

        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={travel.duration}
            onChange={handleChange}
          />
        </label>

        <label>
          Activities:
          <textarea
            name="activities"
            value={travel.activities.join(", ")}
            onChange={(e) =>
              setTravel({ ...travel, activities: e.target.value.split(", ") })
            }
          />
        </label>

        <label>
          Places:
          <textarea
            name="places"
            value={travel.places.join(", ")}
            onChange={(e) =>
              setTravel({ ...travel, places: e.target.value.split(", ") })
            }
          />
        </label>

        <label>
          Notes:
          <textarea className="input-container" name="notes" value={travel.notes} onChange={handleChange} />
        </label>

        <label>
          Image Link:
          <input
            type="text"
            name="imageLink"
            value={travel.imageLink}
            onChange={handleChange}
          />
        </label>

        <button className="submit-btn" type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default UpdateForm;
