import React from 'react'
import { useGetTrendingQuery } from '../features/movieApi'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const { isError, isLoading, error, data } = useGetTrendingQuery()

  const nav = useNavigate()

  if (isLoading) {
    return <div>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_4jyai6ec.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  return (
    <>
      <div className='grid grid-cols-4 gap-6 p-6 '>
        {data && data.results.map((movie) => {
          return <div onClick={() => nav(`movie/detail/${movie.id}`)}
            key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer p-3'>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="" />
            <div className='p-3'>
              <h1 className='text-2xl font-bold'>{movie.title ?? movie.name}</h1>
              <p>{movie.overview.substring(0, 60) + '...'}</p>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Home