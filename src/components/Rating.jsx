import React from 'react'
import {useState} from 'react'
// import { AiFillStar } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import styles from '../styles/Rating.module.css'


const colors = {
    orange: "orange",
    gray: "gray"
}

export const Rating = ({dispatch}) => {
    const [currentValue, setValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value) => {
        if(value === currentValue){ 
            setValue(0)
            return dispatch({type:"RESET_MOVIES"})
        }
        setValue(value)
        dispatch({type: "FILTER_MOVIES", payload: value+value}) 
    }

    const handleMouseOver = (value) => {
        setHoverValue(value)
    }

    const handleMouseLeave = (value) => {
        setHoverValue(undefined)
    }

    const stars = Array(5).fill(0)
    return (
        <div className={styles.ratingBody}>
            <h4 style={{margin: "0", marginRight:"1em"}}>Filter by rating</h4>
            {stars.map((_, index) => (
                <FaStar
                size={20}
                key={index}
                style={{cursor:"pointer"}}
                onClick={(event) => handleClick(index +1)}
                color = {(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                onMouseOver={() => handleMouseOver(index + 1 )}
                onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    )
}
