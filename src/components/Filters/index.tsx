import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMaxHeight, setMaxLifespan, setMaxWeight, setMinHeight, setMinLifespan, setMinWeight, setBreed, setPageLimit } from '../../redux/filters/slice'
import { RootState } from '../../redux/store'

import styles from './Filters.module.sass'

const Filters = () => {
    const [selectedLimiter, setLimiter] = React.useState(0)
    const {pageLimit, minHeight, maxHeight, minWeight, maxWeight, minLifespan, maxLifespan, breed} = useSelector((state: RootState) => state.filters)
    const dispatch = useDispatch()

    const changeLimiter = (limiter: number, onPage: number) => {
        dispatch(setPageLimit(onPage))
        setLimiter(limiter)
    }

    return (<div className={styles.root}>
        <div>filters</div>
        <div className={styles.input}>
            height:
            <input type='number' value={minHeight} onChange={(e) => dispatch(setMinHeight(parseInt(e.target.value)))}/> to
            <input type='number' value={maxHeight} onChange={(e) => dispatch(setMaxHeight(parseInt(e.target.value)))}/> cm
        </div>
        <div className={styles.input}>
            weight:
            <input type='number' value={minWeight} onChange={(e) => dispatch(setMinWeight(parseInt(e.target.value)))}/> to
            <input type='number' value={maxWeight} onChange={(e) => dispatch(setMaxWeight(parseInt(e.target.value)))}/> kg
        </div>
        <div className={styles.input}>
            lifespan:
            <input type='number' value={minLifespan} onChange={(e) => dispatch(setMinLifespan(parseInt(e.target.value)))}/> to
            <input type='number' value={maxLifespan} onChange={(e) => dispatch(setMaxLifespan(parseInt(e.target.value)))}/> years
        </div>
        <div className={`${styles.input} ${styles.bigInput}`}>
            breed name: 
            <input value={breed} onChange={(e) => dispatch(setBreed(e.target.value))}/>
        </div>
        <div className={`${styles.input} ${styles.bigInput}`}>
            show on page:
            <div onClick={() => changeLimiter(0,4)} className={`${styles.selector} ${selectedLimiter == 0 ? styles.selected : ''}`}>4</div>
            <div onClick={() => changeLimiter(1, 8)} className={`${styles.selector} ${selectedLimiter == 1 ? styles.selected : ''}`}>8</div>
            <div onClick={() => changeLimiter(2, 16)} className={`${styles.selector} ${selectedLimiter == 2 ? styles.selected : ''}`}>16</div>
            <div onClick={() => changeLimiter(3, 64)} className={`${styles.selector} ${selectedLimiter == 3 ? styles.selected : ''}`}>64</div>
        </div>
    </div>
    
  )
}

export default Filters
