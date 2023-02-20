import React from 'react'
import { Dog } from '../../redux/dogs/slice'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { RootState } from '../../redux/store'

import styles from './DogInfo.module.sass'
import Skeleton from '../../components/DogCard/Skeleton'

const DogInfo: React.FC = () => {
  const [dog, setDog] = React.useState<any>()
  const [loaded, setLoaded] = React.useState(false)
  const dispatch = useDispatch()
  const params = useParams();

  {/* Я бы за такое api бэкендерам руки оторвал */}
  React.useEffect(() => {
    axios.get<Dog>(`https://localhost:7235/api/dogs/${params.id}`).then(
      response => {
        setDog(response.data)
        setLoaded(true)
      }
    )
  }, [])

  return (
      <div className={styles.root}> 
      {loaded === true ? <div className={styles.card}>
          <div>{dog.name}</div>
          <img src={dog.image} />
          <div>Height: {dog.minHeight} - {dog.maxHeight} cm</div>
          <div>Weight: {dog.minWeight} - {dog.maxWeight} kg</div>
          <div>Lifespan: {dog.minLifespan} - {dog.maxLifespan} years</div> 
          <Link className={styles.link} to="/">
            <div className={styles.button}>
              Go Back
            </div>
          </Link>
        </div> :
       <Skeleton />
      }     
      </div>
    )
}

export default DogInfo