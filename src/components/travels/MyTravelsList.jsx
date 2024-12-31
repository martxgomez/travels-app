//components
import MyTravelCard from "./MyTravelCard.JSX";

//Hooks
import { useEffect } from "react";
import { useState } from "react";

//Data
import supabase from "../../supabase/config";

function MyTravelList() {
  const [myTrips, setMyTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        //get from my trips
        const { data: myTripsData, error: myTripsError } = await supabase
          .from("mytrips")
          .select("*");

        if (myTripsError) throw myTripsError;

        setMyTrips(myTripsData);
      
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllTrips();
  }, []);

  if (loading) return <p className="my-trips-loading">Cargando...</p>;
  if (error) return <p className="my-trips-error">Error: {error}</p>;
  if (myTrips.length === 0) {
    return (
      <>
        <p>No created trips found yet🧳❤️</p>
      </>
    );
  } else {
    return (
      <>
        <div>
          {myTrips.map((myTrip) => {
            return <MyTravelCard key={myTrip.id} {...myTrip} />;
          })}
        </div>
      </>
    );
  }
}

export default MyTravelList;
