import styled from 'styled-components'
import SingleCard from './SingleCard'

const CardContainer = () => {
    return (
        <CardContainerStyle>
            <SingleCard />
        </CardContainerStyle>
    )
}


const CardContainerStyle = styled.div`
    display: flex;
    background-color: whitesmoke;
    width: 90%;
    height: 500px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`

export default CardContainer