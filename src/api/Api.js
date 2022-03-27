import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => ({
        url: 'pokemon',
        params: {
          limit: 30
        },
      }),
      transformResponse: ({ results }) => results.map(res => ({
        name: res.name,
        url: res.url
      }))

    }),
    getPokemonByName: builder.query({
      query: (id) => `pokemon/${id}`,
    })
  })
})

export const { useGetPokemonByNameQuery, useGetAllPokemonsQuery } = pokemonApi