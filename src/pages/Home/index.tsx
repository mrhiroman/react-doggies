import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../redux/store';

import { Dog, setCurrentPage } from '../../redux/dogs/slice';
import DogCard from '../../components/DogCard';
import Skeleton from '../../components/DogCard/Skeleton';
import { Pagination } from '../../components/Pagination';

import styles from './Home.module.sass'
import { Root } from 'react-dom/client';

interface HomeProps {
  isLoading: boolean
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const dogs = useSelector((state: RootState) => state.dogs.dogs)
  const currentPage = useSelector((state: RootState) => state.dogs.currentPage)

  const dispatch = useDispatch();

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <div className={styles.dogsList}>
        {props.isLoading ?  [...new Array(8)].map((_, index) => <Skeleton key={index} />) : dogs.map((dog: Dog) => <DogCard key={dog.id} dog={dog}/>)}
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default Home