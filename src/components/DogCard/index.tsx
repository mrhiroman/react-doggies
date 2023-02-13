import React from 'react'
import { Dog } from '../../redux/dogs/slice'
import { Link } from 'react-router-dom'

import styles from './DogCard.module.sass'

type DogProps = {
    dog: Dog
}

const DogCard: React.FC<DogProps> = ({dog}) => {
  return (
    <Link className={styles.link} to={'/dog/' + dog.id}>
        <div className={styles.root}> 
            <img src={dog.image.url} />
            <div>{dog.name}</div>
        </div>
    </Link>
  )
}

export default DogCard