import MyFavList from "../components/travels/MyFavList.jsx";
import MyTravelsList from "../components/travels/MyTravelsList.jsx"


function MyTravelsPage({travels, setTravels, favorites, addFavorite}) {
  return (
    <>
      <div className="title-container">
        <h2>My trips</h2>
      </div>
      <section className="fav-list"></section>
      <MyFavList 
      travels={travels}
      favorites={favorites}
      addFavorite={addFavorite}/>

      <MyTravelsList
      travels={travels}
      setTravels={setTravels}
      />
      
    </>
  );
}

export default MyTravelsPage;
