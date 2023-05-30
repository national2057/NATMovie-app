import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '606d663305b130ad30e6d9fd4a582bd2';

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl
  }),

  endpoints: (builder) => ({

    getTrending: builder.query({
      query: (query) => ({
        url: '/trending/all/day',
        params: {
          api_key: apiKey,
        },
      })
    }),

    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey,
        },
      })
    }),

    getMovieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        params: {
          api_key: apiKey,
          page: query.page,
        },
      })
    }),

    getMovieVideo: builder.query({
      query: (query) => ({
        url: `movie/${query}/videos`,
        params: {
          api_key: apiKey,
        },
      })
    }),

    getSeacrhMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        params: {
          api_key: apiKey,
          query,
        },
      })
    }),

  })
})

export const { useGetMovieByCategoryQuery, useGetSeacrhMovieQuery, useGetTrendingQuery, useGetMovieVideoQuery, useGetMovieByPageQuery
} = movieApi;