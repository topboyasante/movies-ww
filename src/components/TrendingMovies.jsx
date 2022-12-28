import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function TrendingMovies() {
     const [movies,setMovies] = useState([])
     const headers={
         'Authorization':
         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDVjNjczNWYyYzU1MmYzMjlmZjQwMWRkOWEwM2UxNiIsInN1YiI6IjYzOTcxMzFkZDA1YTAzMDBhZTUwODU3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.khQigZ9yLjQDf6u2P3mNgl5fZe8_MOIwwRluyT_mXr8'
     }
     useEffect(()=>{
         async function fetchDB(){
             await axios.get('https://api.themoviedb.org/3/movie/now_playing',{headers})
             .then((res)=>{
                 setMovies(res.data.results)
             })
         }
         fetchDB()
     })
  return (
    <main>
    {/* Trending Movies */}
    <section className='text-white'>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop
        className="mySwiper"
    >
        {movies.map((movie)=>{
            return(
               <SwiperSlide key={movie.id} className='relative'>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                alt={movie.original_title}
                className='w-full h-[93vh]' />
                <div className="absolute z-[10] top-0 left-0 bg-black w-full h-full opacity-70"/>
                <div className="z-[20] absolute bottom-0 left-0 text-white p-5">
                 <p className='text-4xl'>{movie.original_title}</p>
                 <p className='text-lg text-gray-300'>{movie.overview}</p>
                 
                 <section className='flex flex-row-reverse justify-between items-center w-[300px]'>
                    <div className='flex items-center gap-3'>
                        <p className='bg-[#c69a24] text-black font-bold px-4 py-1 rounded text-lg'>IMDb</p>
                        <p>{movie.vote_average} rating</p>
                    </div>
                    <button className='bg-red-700 px-4 py-2 rounded-md my-2 hover:scale-105 ease duration-150'>
                        <p>Watch Now</p>
                    </button>
                 </section>
                </div>
               </SwiperSlide>
            )
        })}
    </Swiper>
    </section>
    </main>
  )
}

export default TrendingMovies