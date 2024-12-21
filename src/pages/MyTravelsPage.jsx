import MyFavList from "../components/travels/MyFavList.jsx";
import MyTravelsList from "../components/travels/MyTravelsList.jsx";

import { Link } from "react-router-dom";

function MyTravelsPage({ travels, setTravels, favorites, addFavorite }) {
  return (
    <>
      <div className="title-container">
        <h2>My trips</h2>
      </div>
      <section className="fav-list">
        <MyFavList
          travels={travels}
          favorites={favorites}
          addFavorite={addFavorite}
        />
      </section>
      <section className="my-trips-list">
        <Link to="/add-trip">+</Link>
        <MyTravelsList travels={travels} setTravels={setTravels} />
      </section>
    </>
  );
}

export default MyTravelsPage;
