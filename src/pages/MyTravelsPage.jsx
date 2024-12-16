import MyTravelsList from "../components/travels/MyTravelsList.jsx"


function MyTravelsPage({travels, setTravels}) {
  return (
    <>
      <div className="title-container">
        <h2>My trips</h2>
      </div>
      <MyTravelsList
      travels={travels}
      setTravels={setTravels}
      condition={"isFavourite"} />
    </>
  );
}

export default MyTravelsPage;
