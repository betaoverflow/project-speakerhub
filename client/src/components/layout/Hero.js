import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    align-items:center;
    display:flex;
    flex-direction:column;
    margin-top:-3%;
`

const Heading=styled.h1`
    font-size:200px;
    text-align:center;
    font-weight:600;
`

const Image=styled.img`
    z-index:10;
    width:70%;
    margin-top:-20%;
`

const Content=styled.p`
    margin-top:4%;
    margin-bottom:-4%;
    font-size:20px;
    display:flex;
    flex-direction:row;
    letter-spacing:0.4rem;

`

const Special=styled.p`
    background-color:#fd3052;
    font-size:20px;
    padding-top:0;
    margin:auto 10px;
`

const Special2=styled.p`
    background-color:#AEF359;
    font-size:20px;
    padding-top:0;
`

const Hero = () => {
    return (
        <Container>
            <Content>Find the right <Special>speaker</Special> for your next <Special2>event</Special2></Content>
            <Heading>Speakers</Heading>
            <Image src={require("../../assets/landing.png").default}/>
        </Container>
    )
}

export default Hero
