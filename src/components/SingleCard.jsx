import styled from 'styled-components'
import { useGetPokemonByNameMutation } from '../api/Api'
import { CircularProgress } from '@mui/material';


const SingleCard = ({ name, height, weight, abilities }) => {

  return (
    <CardStyle>
      <Name>{name}</Name>
      <Height>Height: {height}</Height>
      <Mass>Weight: {weight}</Mass>
      <AbilitiesList>
        {abilities.map((ability) => (
          <Ability>{ability.ability.name}</Ability>
        ))}
      </AbilitiesList>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  min-height: 280px;
  background-color: whitesmoke;
  border-radius: 3px;
  color: #282c34;
  margin: 10px;

  p,
  ul {
    font-weight: 600;
  }
`

const Name = styled.h2``
const Height = styled.p``
const Mass = styled.p``
const AbilitiesList = styled.ul`
  padding: 0;
`
const Ability = styled.li`
  list-style: none;
  text-align: center;
`

export default SingleCard
