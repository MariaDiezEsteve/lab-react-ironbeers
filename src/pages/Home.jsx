import React from 'react'
import { Link } from "react-router-dom"
import beers from "../assets/beers.png"
import newbeer from "../assets/new-beer.png"
import randombeer from "../assets/random-beer.png"


function Home() {
  return (
    <div>
       <Link to={'/beers'}>
           <img src={beers} alt="imageBeers" />
       </Link>
           <p>All Beers</p>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
           <br />
       <Link to={'/random-beer'}>
           <img src={randombeer} alt="imageRandomBeer" />
       </Link>
           <p>Random Beer</p>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
           <br />
       <Link to={'/new-beer'}>
           <img src={newbeer} alt="imageNewBeer" />
       </Link>
           <p>New Beer</p>
           <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
           <br />
    </div>
  )
}

export default Home