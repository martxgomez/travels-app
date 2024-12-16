import "./DashboardPage.css"
import TravelList from "../components/travels/TravelList"

function Dashboardpage ({travels}) {


        return (
           
            <div>
                <h2>Travels List</h2>
                <TravelList travels={travels} />
            </div>
        );
     }



export default Dashboardpage;