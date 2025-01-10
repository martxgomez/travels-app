import TravelCard from "./TravelCard";
import Slider from "react-slick";

function MyFavList ({travels, favorites, addFavorite}) {
    const favoriteTravels = travels.filter((travel) => favorites.includes(travel.id));

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        nextArrow: <button>❯</button>,
        prevArrow: <button>❮</button>,
      };

      return (
        <div className="my-fav-list">
          {favoriteTravels.length > 0 ? (
            <Slider {...settings}>
              {favoriteTravels.map((travel) => (
                <div key={travel.id}>
                  <TravelCard
                    key={travel.id}
                    {...travel}
                    addFavorite={addFavorite}
                    isFavorite={true}
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No favorite trips found 🧳❤️</p>
          )}
        </div>
      );
}

export default MyFavList;