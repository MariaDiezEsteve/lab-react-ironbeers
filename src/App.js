
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ListBeer from './pages/ListBeer';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/beers' element={<ListBeer />}/>
          <Route path='/new-beer' element={<NewBeer />}/>
          <Route path='/random-beer' element={<RandomBeer />}/>
          <Route path='/beers/:id' element={<SingleBeer />}/>
      </Routes>
     
    </div>
  );
}

export default App;
