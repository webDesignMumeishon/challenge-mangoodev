import React from 'react'
import styles from '../styles/Movie.module.css'
import { useState } from 'react'


export const Movie = ({imageUrl, rating,title,release,overview, main}) => {

    const [showInfo, setShowInfo] = useState(false)
    const [moreInfo, setMoreInfo] = useState(false)

    return (
        <div 
            className={styles.cardBody} 
            onClick={() => setShowInfo(!showInfo)} 
            onMouseOver={() => setMoreInfo(true)}
            onMouseLeave={() => setMoreInfo(false)}
        >
            {moreInfo=== true && showInfo === false ? <p className={styles.moreInfo}>See more</p> : null}
            {showInfo ? 
            <div className={styles.displayInfo}>
                <p className={styles.cardTitle}>{title}</p> 
                <div className={styles.cardSection}>
                    <p>Rating</p>
                    <p>{rating}</p>
                </div>
                <div className={styles.cardSection}>
                    <p>Release</p>
                    <p>{release}</p>
                </div>
                <p>{overview}</p>
            </div> 
            
            : <img src={imageUrl} alt="image_poster" />}
        </div>
    )
}
