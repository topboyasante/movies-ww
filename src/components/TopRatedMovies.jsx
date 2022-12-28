import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

function TopRatedMovies() {
    const [movies,setMovies] = useState([])
    const headers={
        'Authorization':
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDVjNjczNWYyYzU1MmYzMjlmZjQwMWRkOWEwM2UxNiIsInN1YiI6IjYzOTcxMzFkZDA1YTAzMDBhZTUwODU3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.khQigZ9yLjQDf6u2P3mNgl5fZe8_MOIwwRluyT_mXr8'
    }
    useEffect(()=>{
        async function fetchDB(){
            await axios.get('https://api.themoviedb.org/3/movie/top_rated',{headers})
            .then((res)=>{
                setMovies(res.data.results)
            })
        }
        fetchDB()
    })
  return (
    <main>
        {/* Popular Movies */}
    <section className='text-white p-5'>
    <div>
        <h1 className='text-2xl p-5'>Top Rated Movies</h1>
    </div>
    {/* Large */}
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
        className="max-w-[1500px] hidden lg:flex"
    >
        {movies.map((movie)=>{
            return(
               <SwiperSlide key={movie.id} className='rounded'>
                 <Link to={`${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.original_title}
                    className='rounded-t w-full h-[400px]'
                    />
                    <div className="absolute z-[10] top-0 left-0 bg-black w-full h-full opacity-60"/>
                    <div className='z-[20] absolute bottom-0 left-0 text-white p-5'>
                    <p >{movie.original_title}</p>
                    <div className='flex items-center gap-3'>
                        <p className='bg-[#c69a24] text-black font-bold px-4 py-1 rounded text-lg'>TMDb</p>
                        <p>{movie.vote_average} / 10</p>
                    </div>
                    </div>
                </Link>
               </SwiperSlide>
            )
        })}
    </Swiper>
    {/* Medium */}
    <Swiper
        slidesPerView={3}
        spaceBetween={5}
        // pagination={{
        // clickable: true,
        // }}
        // modules={[Pagination]}
        className="max-w-[1500px] hidden md:flex lg:hidden"
    >
        {movies.map((movie)=>{
            return(
               <SwiperSlide key={movie.id} className='rounded bg-[#121212]'>
                 <Link to={`${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.original_title}
                    className='rounded-t w-full h-[400px]'
                    />
                    <div className="absolute z-[10] top-0 left-0 bg-black w-full h-full opacity-60"/>
                    <div className='z-[20] absolute bottom-0 left-0 text-white p-5'>
                    <p >{movie.original_title}</p>
                    <div className='flex items-center gap-3'>
                        <p className='bg-[#c69a24] text-black font-bold px-4 py-1 rounded text-lg'>TMDb</p>
                        <p>{movie.vote_average} / 10</p>
                    </div>
                    </div>
                </Link>
               </SwiperSlide>
            )
        })}
    </Swiper>
    {/* Small */}
    <Swiper
        slidesPerView={1}
        spaceBetween={5}
        className="max-w-[400px] md:hidden lg:hidden"
    >
        {movies.map((movie)=>{
            return(
               <SwiperSlide key={movie.id} className='rounded bg-[#121212]'>
               <Link to={`${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.original_title}
                    className='rounded-t w-full h-[500px]'
                    />
                    <div className="absolute z-[10] top-0 left-0 bg-black w-full h-full opacity-60"/>
                    <div className='z-[20] absolute bottom-0 left-0 text-white p-5'>
                    <p >{movie.original_title}</p>
                    <div className='flex items-center gap-3'>
                        <p className='bg-[#c69a24] text-black font-bold px-4 py-1 rounded text-lg'>TMDb</p>
                        <p>{movie.vote_average} / 10</p>
                    </div>
                    </div>
                </Link>
               </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
    </main>
  )
}

export default TopRatedMovies