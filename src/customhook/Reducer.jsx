import React from 'react'
import {useReducer} from 'react'

const initialState = {
    originalResults: [],
    currentMovies: [],
    showResults: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'GET_MOVIES':
        return {
            currentMovies: [...payload],
            originalResults: [...payload],
            showResults: [...payload]
        }

    case 'SEARCH_MOVIES':
        return {
            ...state,
            showResults: [...payload],
            currentMovies: [...payload]
        }
    
    case 'GET_ORIGINAL':
        return {
            ...state,
            currentMovies: [...state.originalResults],
            showResults: [...state.originalResults]
        }

    case 'RESET_MOVIES':
        return {
            ...state,
            showResults: [...state.currentMovies]
        }
    
    case 'FILTER_MOVIES':
        const filtered = state.currentMovies.filter(movie => movie.vote_average >= payload-2 && movie.vote_average <= payload)
        
        return {
            ...state,
            showResults: [...filtered]
        }

    default:
        return state
    }
}


export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return [state, dispatch]
}
