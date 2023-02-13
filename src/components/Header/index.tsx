import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Header.module.sass'

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <Link to="/" className={styles.link}>React Doggies</Link>
      </h1>
    </div>
  )
}

export default Header