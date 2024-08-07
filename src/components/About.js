import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TeamMembers from './TeamMembers';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-align: center;
  background-color: #f4f4f4;
  padding: 50px 20px;
  animation: ${fadeIn} 1s ease-in;
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
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: transform 0.3s;
  ${TeamCard}:hover & {
    transform: scale(1.1);
  }
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

const Modal = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: left;
`;

const CloseButton = styled.button`
  background-color: #57068c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #45046c;
  }
`;

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <AboutContainer>
      <Title>Our Team 2024</Title>
      <TeamSection>
        {TeamMembers.map((member, index) => (
          <TeamCard key={index} onClick={() => setSelectedMember(member)}>
            <TeamImage src={member.image} alt={`${member.name}'s picture`} />
            <TeamName>{member.name}</TeamName>
            <TeamPosition>{member.position}</TeamPosition>
          </TeamCard>
        ))}
      </TeamSection>
      {selectedMember && (
        <Modal show={!!selectedMember}>
          <ModalContent>
            <h2>{selectedMember.name}</h2>
            <h3>{selectedMember.position}</h3>
            <p>{selectedMember.bio}</p>
            <CloseButton onClick={() => setSelectedMember(null)}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </AboutContainer>
  );
};

export default AboutPage;
