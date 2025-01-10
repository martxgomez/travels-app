//components
import MyTravelCard from "./MyTravelCard.JSX";
import Slider from "react-slick";

//Hooks
import { useEffect } from "react";
import { useState } from "react";

//Data
import supabase from "../../supabase/config";

function MyTravelsList() {
  const [myTrips, setMyTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Número de elementos visibles en el carrusel
    slidesToScroll: 1,
    nextArrow: <button>❯</button>,
    prevArrow: <button>❮</button>,
  };
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
 

  return (
    <div className="my-trips-list">
      {myTrips.length > 0 ? (
        <Slider {...settings}>
        {myTrips.map((myTrip) => {
            return <MyTravelCard key={myTrip.id} {...myTrip} />;
          })}
        </Slider>
      ) : (
        <p>No saved trips found 🧳❤️</p>
      )}
    </div>
  );
}

export default MyTravelsList;
