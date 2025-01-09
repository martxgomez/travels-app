import TravelCard from "./TravelCard";
function TravelList ({travels, favorites, addFavorite}) {
    return (
        <>
        
            <div className="cards-container">
            {travels.map((travel)=>{
                const isFavorite = favorites.includes(travel.id);
                return <TravelCard key={travel.id} {...travel} addFavorite={addFavorite} isFavorite={isFavorite}/>;
            })}
         
            </div>
        </>
    )
}

export default TravelList;