import styled from 'styled-components'
import SingleCard from './SingleCard'
import { useGetAllPokemonsQuery } from '../api/Api'
import { useState } from 'react'
import { Button, Input, CircularProgress } from '@mui/material';

const CardContainer = () => {
  const { data: allPokemons, isLoading } = useGetAllPokemonsQuery()

  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  if (isLoading) return <CircularProgress />

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchValue(prev => inputValue)
    console.log(data)
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
        {allPokemons.map((pokemon, index) => (
          <SingleCard name={pokemon.name} key={index} index={index + 1} />
        ))}
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
