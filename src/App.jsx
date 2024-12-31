//style
import "./App.css";

//data
import supabase from "./supabase/config.js";

//react
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

//components
import Navbar from "./components/Navbar";
import TravelsCommunity from "./pages/TravelsCommunity";
import Footer from "./components/footer";

//routes
import MyTravelsPage from "./pages/MyTravelsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";
import Dashboardpage from "./pages/DashboardPage";
import UserPage from "./pages/UserPage.jsx";
import AddTripForm from "./pages/AddTripForm.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import MyTravelsDetailsPage from "./pages/MyTravelsDetailsPage.jsx";

function App() {
  const [travels, setTravels] = useState([]);
  const [favorites, setFavorites] = useState([]); //state for the favorite travels

  async function getData() {
    try {
      const response = await supabase.from("travels").select();

      setTravels(response.data);
    } catch (error) {
      console.log("Error from getting API: ", error);
    }
  }

  useEffect(() => {
    getData();
    getFavorites();
  }, []);

  //Function to handle favorites
  const addFavorite = async (id) => {
    try {
      if (favorites.includes(id)) {
        const { error } = await supabase
          .from("favs")
          .delete()
          .eq("travels_id", id)
          .eq("username", "testing_user");
        setFavorites(favorites.filter((favorite) => favorite !== id));

        if (error) throw error;
      } else {
        const { error } = await supabase.from("favs").insert({
          travels_id: id,
          username: "testing_user",
        });
        if (error) throw error;
        setFavorites([...favorites, id]);
      }
      console.log("Current favorites: ", favorites);
    } catch (error) {
      console.log("Error adding/removing favorite: ", error);
    }
  };

  //Function to fetch the favorite trips
  async function getFavorites() {
    try {
      const { data, error } = await supabase.from("favs").select("travels_id");

      if (error) throw error;

      const favoriteIds = data.map((fav) => fav.travels_id);
      setFavorites(favoriteIds);
    } catch (error) {
      console.log("Error fetching favorite trips: ", error);
    }
  }

  return (
    <div>
      <Navbar />

      <section>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboardpage
                travels={travels}
                favorites={favorites}
                addFavorite={addFavorite}
              />
            }
          />
          <Route path="/travels/:travelId" element={<DetailsPage />} />
          <Route
            path="/my-trips"
            element={
              <MyTravelsPage
                travels={travels}
                setTravels={setTravels}
                favorites={favorites}
                addFavorite={addFavorite}
              />
            }
          />
          <Route
            path="/my-trips/:travelId"
            element={<MyTravelsDetailsPage />}
          />
          <Route path="/add-trip" element={<AddTripForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<TravelsCommunity />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
