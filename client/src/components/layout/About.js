import React from 'react';
import styled from 'styled-components';

const AboutSec = styled.div`
  color: #fff;
  padding: 0px 0;
  background: #fff;
`;

const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

const AboutColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TopLine = styled.div`
  color: #fd3052;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom:-25px;
`;

const Img = styled.img`
  vertical-align: middle;
  display: inline-block;
  padding-right:30px;
  padding-left:30px;
  width:240%;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #1c2237;
`;

const Subtitle = styled.p`
  font-size: 20px;
  line-height: 2;
  color: grey;


`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

function About() {
  return (
    <>
      <AboutSec>
        <Container>
          <AboutRow>
            <AboutColumn>
              <TextWrapper>
                <TopLine>ABOUT</TopLine>
                <Heading>Speaker Hub</Heading>
                <Subtitle>Organizing an event is not easy. Getting in touch with a confident speaker who's an expert on some subject can be hard. SpeakerHub aims to be the one stop solution for finding and getting in touch with speakers. With speakers divided up by subject knowledge, you can find the right speaker for your next team gathering, tech conference, or really any occasion! No more approaching people on social media and struggling to find a speaker for an event. Speaker Hub aims to connect organizers with speakers, making life easier for everyone and satisfying our 3 stakeholders</Subtitle>
              </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper>
                <Img src={require("../../assets/img.png").default}/>
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>
        </Container>
      </AboutSec>
    </>
  );
}

export default About;