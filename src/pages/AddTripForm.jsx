//css

//hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//data
import supabase from "../supabase/config.js"

function AddTripForm() {
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [activities, setActivities] = useState("");
  const [places, setPlaces] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  //function to insert trip in mytrips table at supabase
  const addTrip = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("mytrips").insert([
        {
          destination,
          price,
          imageLink,
          duration,
          rating,
          activities,
          places,
          notes,
        },
      ]);

      if (error) {
        console.error("Error adding trip:", error.message);
        return;
      }

      console.log("Trip added successfully:", data);
      // Navigate to my trips page
      navigate("/my-trips");
    } catch (error) {
      console.error("Unexpected error adding trip:", error);
    }
  };
  return (
    <form onSubmit={addTrip}>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image Link"
        value={imageLink}
        onChange={(e) => setImageLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        placeholder="Activities"
        value={activities}
        onChange={(e) => setActivities(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Places"
        value={places}
        onChange={(e) => setPlaces(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button type="submit">Add Trip</button>
    </form>
  );
}

export default AddTripForm;
