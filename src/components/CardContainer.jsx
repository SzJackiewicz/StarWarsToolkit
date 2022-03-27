import styled from 'styled-components'
import SingleCard from './SingleCard'
import { useGetAllPokemonsQuery, useGetPokemonByNameMutation } from '../api/Api'
import { useState } from 'react'
import { Button, Input, CircularProgress } from '@mui/material';

const CardContainer = () => {
  //const { data: allPokemons, isLoading } = useGetAllPokemonsQuery()
  const [getPokemonByName, { data: singlePokemon }] = useGetPokemonByNameMutation('')

  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchValue(prev => inputValue)
    try {
      await getPokemonByName(inputValue)

    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <>
      <SearchContainer onSubmit={handleSubmit}>
        <Input
          id="outlined-basic"
          label="Szuka pokemona"
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth="true"
          disableUnderline={true}
        />
        <Button
          variant="text"
          type='submit'
        >
          SZUKAJ
        </Button>
      </SearchContainer>
      <CardContainerStyle>
        {singlePokemon &&
          <SingleCard
            name={singlePokemon?.name}
            height={singlePokemon?.height}
            weight={singlePokemon?.weight}
            abilities={singlePokemon?.abilities}
          />
        }
      </CardContainerStyle>
    </>
  )
}

const CardContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #282c34;
  width: 90%;
  max-height: 650px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  overflow: auto;
`
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 10px;
  height: 50px;
  background-color: whitesmoke;
  padding: 5px;
`

export default CardContainer
