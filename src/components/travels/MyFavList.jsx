import TravelCard from "./TravelCard";

function MyFavList ({travels, favorites, addFavorite}) {
    const favoriteTravels = travels.filter((travel) => favorites.includes(travel.id));

    return (
        <div>
            {favoriteTravels.length > 0 ? (
                favoriteTravels.map((travel) => {
                    return (
                        <TravelCard
                        key={travel.id}
                        {...travel}
                        addFavorite={addFavorite}
                        isFavorite = {true} />
                    );
                })
            ) : (
                <p>No favorite trip found 🧳❤️ </p>
            )}
        </div>
    )
}

export default MyFavList;