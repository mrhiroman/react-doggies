import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import DogInfo from './pages/DogInfo';
import Header from './components/Header';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from './redux/store';

import './App.sass'

import { Dog, setDogs } from './redux/dogs/slice'

function App() {
  const dispatch = useDispatch()
  const currentPage = useSelector((state: RootState) => state.dogs.currentPage)

  const [isLoading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    axios.get<Dog[]>(`https://api.thedogapi.com/v1/breeds?page=${currentPage}&limit=8`).then(
      response => {
        dispatch(setDogs(response.data)) 
        setLoading(false)
        
      }
    )
  }, [currentPage]);

  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading}/>} />
        <Route path="/dog/:id" element={<DogInfo />} />
      </Routes>
    </div>
    
  );
}

export default App;
