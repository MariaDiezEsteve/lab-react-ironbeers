import axios from 'axios'
import React, {useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import home from "../assets/home.png"

function NewBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState("")

    const navigate = useNavigate()
    
    const handleNameChange = (e) => {setName(e.target.value)}
    const handleTaglineChange = (e) => {setTagline(e.target.value)}
    const handleDescriptionChange = (e) => {setDescription(e.target.value)}
    const handlefirst_brewedChange = (e) => {setFirst_brewed(e.target.value)}
    const handlebrewers_tipsChange = (e) => {setBrewers_tips(e.target.value)}
    const handleattenuation_levelChange = (e) => {setAttenuation_level(e.target.value)}
    const handlecontributed_byChange = (e) => {setContributed_by(e.target.value)}

    const handleSubmit = async (e) => {
        e.prevent.default()

        try{
            const newBeer = {
                name, 
                tagline,
                description,
                first_brewed,
                brewers_tips,
                attenuation_level,
                contributed_by
            }

            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            navigate("/beers")

        }catch(err){console.log(err)} 
        
    }


  return (
        <div>
            <header>
                <NavLink to="/">
                    <img scr={home} alt="imageBeer"></img>  
                </NavLink>
            </header>
            <br />
            <br />
            <div> 
                <form onsubmit={handleSubmit}>
                    <label htmlFor="name"><strong>Name &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="text" 
                        name='name'
                        value={name}
                        onChange={handleNameChange} />
                    <br />
                    <label htmlFor="tagline"><strong>Tagline &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="text" 
                        name='tagline'
                        value={tagline}
                        onChange={handleTaglineChange}  />
                    <br />
                    <label htmlFor="description"><strong>Description &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="text" 
                        name='description'
                        value={description}
                        onChange={handleDescriptionChange}  />
                    <br />
                    <label htmlFor="first_brewed"><strong>First Brewed &nbsp;&nbsp;</strong></label>
                    <input 
                        
                        className='form-boxes'
                        type="text" 
                        name='first_brewed'
                        value={first_brewed}
                        onChange={handlefirst_brewedChange}  />
                    <br />
                    <label htmlFor="brewers_tips"><strong>Brewers Tips &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="text" 
                        name='brewers_tips'
                        value={brewers_tips} 
                        onChange={handlebrewers_tipsChange} />
                    <br />
                    <label htmlFor="attenuation_level"><strong>Attenuation Level &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="number" 
                        name='attenuation_level'
                        value={attenuation_level}
                        onChange={handleattenuation_levelChange} />
                    <br />
                 
                    <label htmlFor="contributed_by"><strong>Contributed by &nbsp;&nbsp;</strong></label>
                    <input 
                        className='form-boxes'
                        type="text" 
                        name='contributed_by'
                        value={contributed_by}
                        onChange={handlecontributed_byChange}  />
                    <br />
                  
                    <button className='btn'>ADD NEW</button>
                </form>
            </div> 
        </div>
  )
}

export default NewBeer