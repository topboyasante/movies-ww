import React from 'react'
import PopularMovies from '../components/PopularMovies'
import TrendingMovies from '../components/TrendingMovies'


function Homepage() {
   
    return (
    <main>
        <TrendingMovies/>
        <PopularMovies/>
    </main>
    )
}

export default Homepage