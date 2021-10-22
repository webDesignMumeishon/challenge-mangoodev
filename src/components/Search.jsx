import React from 'react'
import { useState } from 'react'
import styles from '../styles/Search.module.css'


export const Search = ({dispatch}) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value.length){
            setValue('')
            return dispatch({type: "GET_ORIGINAL"})
        }
        else{
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=95fdaefd2a8a510553234065950ae4f1&language=en-US&query=${value}&page=1&include_adult=false&region=${value}&year=${value}&primary_release_year=${value}`)
            .then(data => data.json())
            .then(response => {
                setValue('')
                return dispatch({type: 'SEARCH_MOVIES', payload: response.results})
            })
        }
    }

    const handleOnChange = (e) => {
        const {value} = e.target
        setValue(value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formBody}>
            <input id="input-search" type="text" value={value} onChange={handleOnChange} />
            <label htmlFor="input-search"></label>
            <button type="submit">Submit</button>
        </form>
    )
}
