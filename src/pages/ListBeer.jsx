import React, {useState, useEffect} from 'react'
import { NavLink, Link } from "react-router-dom"
import home from "../assets/home.png"
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

function ListBeer() {
 
    const [beersList, setBeersList] = useState()
    const [loading, setLoading] = useState(true)
    // const [filterBeers, setFilterBeers] = useState()

    // const [search, setSearch] = useState("")

    // const searchBeer = (search) => {
    //     const filterBeer = beersList.filter((eachProd) => {
    //         return eachProd.name.includeS(search)
    //     })
    //     setFilterBeers(filterBeer)
    // }


    // const handleSearch = (event) => {
    //     setSearch(event.target.value)
    // }

    useEffect (() => {
        getBeerList()

    }, [])

    const getBeerList = async () => {
            try{
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            console.log(response)

            setBeersList(response.data)
            setLoading(false)
            }catch(err){console.log(err)} 
        }

    

    if(loading === true){
        return <ClipLoader color={"pink"}/>
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
                <div>
                    {/* <form >
                        <label htmlFor="search">Search:</label>
                        <input type="text" name='search' value={search} onChange={handleSearch}/>

                    </form> */}
                </div>
                    {
                        beersList.map((eachBeer, index) =>{
                            return(
                                <div key={eachBeer.name + index}>
                                    <img src={eachBeer.image_url} alt="imageBeer" width={50} />
                                    <p>{eachBeer.name}</p>
                                    <br />
                                    <p>{eachBeer.tagline}</p>
                                    <p>{eachBeer.contributed_by}</p>
                                    <Link to={`/beers/${eachBeer._id}`}> See More </Link>
                            </div>
                            )
                        })
                    }
            </div>
        </div>
      )
}

export default ListBeer