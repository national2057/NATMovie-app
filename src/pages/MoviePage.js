import React from 'react'
import { useGetMovieByPageQuery } from '../features/movieApi'
import { useNavigate, useParams } from 'react-router-dom'

const MoviePage = () => {

  const nav = useNavigate()
  const { category, page } = useParams()
  const { isError, isLoading, data } = useGetMovieByPageQuery({
    category,
    page,
  })
  if (isLoading) {
    return <div>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_4jyai6ec.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  // console.log(data)

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

      <div className='flex justify-center space-x-5 pb-5 font-bold'>
        {data.page > 1 && <button onClick={() => nav(-1)}>Prev</button>}
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/${category}/${data.page + 1}`)}>Next</button>
      </div>

    </>
  )
}


export default MoviePage