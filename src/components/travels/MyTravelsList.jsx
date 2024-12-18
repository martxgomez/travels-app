import TravelCard from "./TravelCard";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../../supabase/config";

function TravelList() {
  const [favs, setFavs] = useState([]);
  const [myTrips, setMyTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTrips = async () => {
      try {
        //get from favs and my trips
        const { data: favsData, error: favsError } = await supabase
          .from("favs")
          .select("*");
        const { data: myTripsData, error: myTripsError } = await supabase
          .from("mytrips")
          .select("*");

        if (favsError || myTripsError) throw favsError || myTripsError;

        setFavs(favsData);
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
  if (favs.length===0 && myTrips.length===0) {
    return (
      <>
        <p>No favorite trips found 🧳❤️</p>
      </>
    );
  } else {
    return (
      <>
        <div>
          {favs.map((fav) => {
            return <TravelCard key={fav.id} {...fav} />;
          })}
          {myTrips.map((myTrip) => {
            return <TravelCard key={myTrip.id} {...myTrip} />;
          })}
        </div>
      </>
    );
  }
}

export default TravelList;
