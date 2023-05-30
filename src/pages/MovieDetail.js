import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieVideoQuery } from '../features/movieApi'

const MovieDetail = () => {
  const { id } = useParams()
  const { data } = useGetMovieVideoQuery(id)
  console.log(data)

  return (
    <>
      <div class="aspect-w-16 aspect-h-9">
        <iframe src={`https://www.youtube.com/embed/${data?.results[0].key}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </>
  )
}

export default MovieDetail