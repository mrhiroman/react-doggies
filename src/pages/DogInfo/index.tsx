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
  const [image, setImage] = React.useState()
  const dispatch = useDispatch()

  const [isLoading, setLoading] = React.useState(false)
  const params = useParams();

  {/* Я бы за такое api бэкендерам руки оторвал */}
  React.useEffect(() => {
    setLoading(true)
    axios.get<any>(`https://api.thedogapi.com/v1/breeds/${params.id}`).then(
      response => {
        setDog(response.data)
        axios.get<any>(`https://api.thedogapi.com/v1/images/${response.data.reference_image_id}`).then(
          response => {
            setImage(response.data.url)
            setLoading(false)
        })
        
      }
    )
  }, [])

  return (
      <div className={styles.root}> 
      {dog ? <div className={styles.card}>
          <div>{dog.name}</div>
          <img src={image} /> {/* Needs load fix */}
          <div>Height: {dog.height.metric} cm</div>
          <div>Weight: {dog.weight.metric} kg</div>
          <div>Lifespan: {dog.life_span}</div> 
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