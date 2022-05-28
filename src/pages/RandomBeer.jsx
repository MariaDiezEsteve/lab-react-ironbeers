import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import home from "../assets/home.png"
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios';

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getBeerRandom()

    }, [])

    const getBeerRandom = async () => {
        try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            console.log(response)
            setRandomBeer(response.data)
            setLoading(false)

        }catch(err){console.log(err)} 
        
    }

    if(loading === true){
        return <PacmanLoader color={"pink"}/>

    }

  return (
    <div>
        <header>
            <NavLink to="/" alt="imageBeer"> 
               <img scr={home} alt="imageBeer" width={50}></img>       
            </NavLink>
        </header>
        <br />
        <br />
         <div>
                <img src={randomBeer.image_url} alt="imageBeer" width={50} />
                <p>{randomBeer.name}</p>
                <br />
                <p>{randomBeer.tagline}</p>
                <br />
                <p>{randomBeer.first_brewed}</p>
                <br />
                <p>{randomBeer.attenuation_level}</p>
                <br />
                <p>{randomBeer.description}</p>
                <br />
                <p>{randomBeer.contributed_by}</p>
         </div>              
    </div>
  )
}

export default RandomBeer