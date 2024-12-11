import supabase from "../supabase/config";
import { useState, useEffect } from "react";

function Dashboardpage () {
    const [travels, setTravels] = useState([]);
    async function getData () {
        try{
        const response = await supabase
        .from('travels')
        .select()
        console.log("response ",response.data)
        setTravels(response.data); 
        } catch (error) {
            console.log("Error from getting API: ", error);
        }
        };
    
        useEffect(()=> {
            getData();
        }, []);

        return (
           
            <div>
              {travels.map((travel) => {
        return (
            <div key={travel.id}>
            <h2> {travel.destination}</h2>
            <img src={travel.imageLink} alt={`Picture of ${travel.destination}`} />
            <p> Starting from {`${travel.price}`}€</p>
            <p> {travel.duration} days</p>
            <p>{travel.rating} / 5 </p>
            </div>
            );
        
      })}
            </div>
        );
     }



export default Dashboardpage;