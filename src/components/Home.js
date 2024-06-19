import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  background-color: #282c34;
`;

const Section = styled.section`
  width: 100%;
  padding: 250px 20px;
  box-sizing: border-box;
  &:nth-child(odd) {
    background-color: #333;
  }
  &:nth-child(even) {
    background-color: #282c34;
  }
`;
const BackgroundSection = styled(Section)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(/images/DSC01373.JPG);
  background-color: transparent;
  padding: 350px 20px;
`;

const HomeTitle = styled.h1`
  font-size: 5rem;
  margin-top: -250px; 
`;

const HomeSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  margin-top: -100px; 
  padding-top: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const SectionContent = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <BackgroundSection>
        <HomeTitle>Welcome to NYU Barbell</HomeTitle>
        <HomeSubtitle>Join us for lifting, community, and fun!</HomeSubtitle>
      </BackgroundSection>
      <Section>
        <SectionTitle>About Us</SectionTitle>
        <SectionContent>
          NYU Barbell is a student-run organization dedicated to promoting strength training and fitness within the NYU community. We offer training sessions, workshops, and events to help members achieve their fitness goals.
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Upcoming Events</SectionTitle>
        <SectionContent>
          Check out our upcoming events and join us for competitions, workshops, and social gatherings. Stay tuned for the latest updates and be a part of our vibrant community!
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          Have questions or want to get involved? Reach out to us at contact@nyubarbell.com or follow us on our social media platforms. We’d love to hear from you!
        </SectionContent>
      </Section>
    </HomeContainer>
  );
};

export default Home;
