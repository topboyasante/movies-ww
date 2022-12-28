import React from 'react'
import PopularMovies from '../components/PopularMovies'
import TopRatedMovies from '../components/TopRatedMovies'
import TrendingMovies from '../components/TrendingMovies'


function Homepage() {
   
    return (
    <main>
        <TrendingMovies/>
        <PopularMovies/>
        <TopRatedMovies/>
    </main>
    )
}

export default Homepage