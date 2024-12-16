import TravelCard from "./TravelCard";
function TravelList({ travels, setTravels, condition }) {
    
  const filteredTravels = travels.filter((travel) => travel[condition]);
console.log(filteredTravels);

  return (
    <>
      {filteredTravels.lenght>0 ? (
        filteredTravels.map((travel) => {
          return <TravelCard key={travel.id} setTravels={setTravels} />;
        })
      ) : (
        <p>No favorite trips found 🧳❤️</p>
      )}
    </>
  );
}

export default TravelList;
