import React from 'react'
import { Movie } from './Movie'
import styles from '../styles/Discover.module.css'

export const Discover = ({movies}) => {
    const url_base = "https://image.tmdb.org/t/p/w500"

    return (
        <section className={styles.mainBody}>
            <div className={styles.imgsWrapper}>
            {movies && movies.map(m => (
                <Movie
                    imageUrl={url_base + m.poster_path}
                    rating={m.vote_average}
                    title={m.title}
                    release={m.release_date}
                    overview={m.overview}
                />
            ))}
            </div>
        </section>
    )
}
