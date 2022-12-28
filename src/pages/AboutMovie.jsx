import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

function AboutMovie() {
  const {movieID} = useParams()
  const [currentMovie,setCurrentMovie] = useState({})
  const [genres,setGenres] = useState({})
  const [similarMovies,setSimilarMovies] = useState([])
  useEffect(()=>{
    async function getVideo(){
        await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d45c6735f2c552f329ff401dd9a03e16&language=en-US`)
        .then((res)=>{
            setCurrentMovie(res.data)
            setGenres(res.data.genres)
            localStorage.setItem('genres',JSON.stringify(genres))
        })
        await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=d45c6735f2c552f329ff401dd9a03e16&language=en-US&page=1`)
        .then((res)=>{
          setSimilarMovies(res.data.results)
        })
    }
    getVideo()
  })

  return (
    <main className='bg-[#000000] h-full w-screen text-white'>
          <section>
          <img src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`} 
                alt={currentMovie.original_title}
                className='w-full h-[70vh]'
          />
          <div className=' max-w-[1240px] mx-auto p-3'>
          <p>{currentMovie.original_title}</p>
          <p>{currentMovie.release_date}</p>
            {/* <section className='flex gap-2'>
                <p>Genres:</p>
                <div className='flex gap-2'>
                   {genres.map((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                   })}
                </div>
            </section> */}
            <p>{currentMovie.overview}</p>
          </div>
          </section>
          <section className='max-w-[1240px] mx-auto'>
            <p className='p-3 text-lg '>Recommended Movies</p>
            <hr />
            {/* Large */}
            <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    className="max-w-[1500px] hidden lg:flex mt-5"
                  >
              {similarMovies.map((item)=>{
                return(
                  
                  <SwiperSlide key={item.id} className='p-5'>
                    <Link to={`/${item.id}`}>
                      <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                        alt={item.original_title}
                        className='rounded-t w-full h-[400px]'
                        />
                      </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* Medium */}
            <Swiper
                    slidesPerView={3}
                    spaceBetween={5}
                    className="max-w-[1500px] hidden lg:hidden md:flex mt-5 m-5"
                  >
              {similarMovies.map((item)=>{
                return(
                  
                  <SwiperSlide key={item.id} className='p-5'>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                      alt={item.original_title}
                      className='rounded-t w-full h-[400px]'
                      />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* Small */}
            <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    className="max-w-[1500px] flex lg:hidden md:hidden mt-5"
                  >
              {similarMovies.map((item)=>{
                return(
                  
                  <SwiperSlide key={item.id} className='p-5'>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                      alt={item.original_title}
                      className='rounded-t w-full h-[400px]'
                      />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
    </main>
  )
}

export default AboutMovie