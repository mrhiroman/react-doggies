import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import DogInfo from './pages/DogInfo';
import Header from './components/Header';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from './redux/store';

import './App.sass'

import { Dog, setDogs, setDogsCount } from './redux/dogs/slice'

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  const dispatch = useDispatch()
  const {currentPage} = useSelector((state: RootState) => state.dogs)
  const {pageLimit, minHeight, maxHeight, minWeight, maxWeight, minLifespan, maxLifespan, breed} = useSelector((state: RootState) => state.filters)

  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    axios.get<Dog[]>(
      `https://localhost:7235/api/dogs?page=${currentPage}&limit=${pageLimit}&minheight=${minHeight}&maxheight=${maxHeight}&minweight=${minWeight}&maxweight=${maxWeight}&minlifespan=${minLifespan}&maxlifespan=${maxLifespan}&breed=${breed}`).then(
      response => {
        dispatch(setDogs(response.data)) 
        dispatch(setDogsCount(response.headers['x-total-count']))
        setLoading(false)
      }
    )
  }, 
  [currentPage,
    pageLimit,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight, 
    minLifespan,
    maxLifespan,
    breed]);

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading}/>} />
        <Route path="/dogs/:id" element={<DogInfo />} />
      </Routes>
    </div>
    
  );
}

export default App;
