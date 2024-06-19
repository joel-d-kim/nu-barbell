import React from 'react';
import styled from 'styled-components';
import TeamMembers from './TeamMembers';
const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-align: center;
  background-color: #f4f4f4;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const TeamSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamCard = styled.div`
  background-color: white;
  margin: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 10px;
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25%;
  margin-bottom: 20px;
`;

const TeamName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const TeamPosition = styled.h3`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>Our Team 2024</Title>
      <TeamSection>
        {TeamMembers.map((member, index) => (
          <TeamCard key={index}>
            <TeamImage src={member.image} alt={`${member.name}'s picture`} />
            <TeamName>{member.name}</TeamName>
            <TeamPosition>{member.position}</TeamPosition>
          </TeamCard>
        ))}
      </TeamSection>
    </AboutContainer>
  );
};

export default AboutPage;
