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
         <div className='single-beer-all'>
                <img src={beerDetails.image_url} alt="imageBeer" width={250} />
            <div className="single-beer-column">
                <p className='single-beer-name'>{beerDetails.name}</p>
                <br />
                <p className='single-beer-tagline'>{beerDetails.tagline}</p>
                <br />
            </div>
            <div className="single-beer-column">
                <p className='single-beer-first'>{beerDetails.first_brewed}</p>
                <br />
                <p className='single-beer-level'>{beerDetails.attenuation_level}</p>
                <br />
            </div>
                <p className='single-beer-decription'>{beerDetails.description}</p>
                <br />
                <p className='single-beer-by'>{beerDetails.contributed_by}</p>
         </div>              
    </div>
  )
}

export default SingleBeer