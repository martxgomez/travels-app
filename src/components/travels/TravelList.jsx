import TravelCard from "./TravelCard";
function TravelList ({travels}) {
    return (
        <>
        
            <div>
            {travels.map((travel)=>{
                return <TravelCard key={travel.id} {...travel}/>;
            })}
         
            </div>
        </>
    )
}

export default TravelList;