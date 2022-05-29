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
        <div className='border-all'>
           <p className='text-beers'><strong> All Beers </strong></p>
           <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
        </div>
           <br />
       <Link to={'/random-beer'}>
           <img src={randombeer} alt="imageRandomBeer" />
       </Link>
       <div className='border-all'>
           <p className='text-beers'><strong>Random Beer </strong></p>
           <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
        </div>
           <br />
       <Link to={'/new-beer'}>
           <img src={newbeer} alt="imageNewBeer" />
       </Link>
       <div className='border-all'>
           <p className='text-beers'><strong>New Beer </strong></p>
           <p className='text-description'>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis mi potenti, pretium quisque eget faucibus elementum vitae fusce at quis, ut ultrices praesent sociis interdum diam lacus blandit pellentesque. Eu viverra auctor etiam eget vestibulum dapibus fermentum enim suspendisse iaculis, tortor consequat neque ultrices cras augue volutpat dis laoreet diam, a ut aliquam potenti praesent id montes pulvinar natoque. </p>
        </div>
           <br />
    </div>
  )
}

export default Home