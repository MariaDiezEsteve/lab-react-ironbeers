import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from "react-router-dom"
import home from "../assets/home.png"
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

function SingleBeer() {
    const [beerDetails, setBeerDetails] = useState()
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        getDetails()

    }, [])

    const getDetails = async () => {
        try{
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            console.log(response)

            setBeerDetails(response.data)
            setLoading(false)

        }catch(err){console.log(err)} 
    }

    if(loading === true){
        return <ClipLoader color={"pink"}/>
}



  return(
    <div>
        <header>
            <NavLink to="/" alt="imageBeer"> 
               <img scr={home} alt="imageBeer" width={50}></img>       
            </NavLink>
        </header>
        <br />
        <br />
         <div>
                <img src={beerDetails.image_url} alt="imageBeer" width={50} />
                <p>{beerDetails.name}</p>
                <br />
                <p>{beerDetails.tagline}</p>
                <br />
                <p>{beerDetails.first_brewed}</p>
                <br />
                <p>{beerDetails.attenuation_level}</p>
                <br />
                <p>{beerDetails.description}</p>
                <br />
                <p>{beerDetails.contributed_by}</p>
         </div>              
    </div>
  )
}

export default SingleBeer