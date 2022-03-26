import styled from "styled-components";

const SingleCard = () => {

    return (
        <CardStyle>
            <Name> Luke Skywalker </Name>
            <Height>height: 177</Height>
            <Mass>mass: 78</Mass>
        </CardStyle>
    )

}

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 350px;
    background-color: #282c34d1;
    border-radius: 3px;
    color: whitesmoke;
`

const Name = styled.h2``
const Height = styled.p``
const Mass = styled.p``


export default SingleCard