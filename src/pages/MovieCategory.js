import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieByCategoryQuery } from '../features/movieApi'

const MovieCategory = () => {
  const { category } = useParams()
  const { isError, isLoading, error, data } = useGetMovieByCategoryQuery(category)


  return (
    <>
      <div className='grid grid-cols-4 gap-6 p-6 '>
        {data && data.results.map((movie) => {
          return <div key={movie.id} className='shadow-lg hover:scale-105 ease-in duration-300 cursor-pointer p-2'>
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

export default MovieCategory