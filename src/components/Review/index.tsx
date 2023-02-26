import React, { useState } from 'react'
import styles from './Review.module.sass'
import axios from 'axios';

const Review = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reviewText, setText] = useState("");

    const sendReview = () => {
        axios.post('https://localhost:7235/api/reviews', {name, email, reviewText}).then(() => alert("Success!")).catch(() => alert("Failed! maybe your email is invalid..."));
    }
    return (
    <div className={styles.root}>
        <div>add a review</div>
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
        <textarea placeholder='text' onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => sendReview()}>send</button>
    </div>
  )
}

export default Review