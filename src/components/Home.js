import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  background-color: #282c34;
  animation: ${fadeIn} 2s ease-in;
`;

const Section = styled.section`
  width: 100%;
  padding: 250px 20px;
  box-sizing: border-box;
  transition: transform 0.3s, background-color 0.3s;
  &:nth-child(odd) {
    background-color: #333;
  }
  &:nth-child(even) {
    background-color: #282c34;
  }
  &:hover {
    transform: translateY(-10px);
    background-color: #444;
  }
`;

const BackgroundSection = styled(Section)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(/images/DSC01373.JPG);
  background-attachment: fixed;
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

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #0056b3;
    transform: scale(1.1);
  }
`;

const ScrollDownIcon = styled(FaArrowDown)`
  font-size: 2rem;
  margin-top: 20px;
  cursor: pointer;
  animation: bounce 2s infinite;
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const AnimatedTitle = animated(HomeTitle);
const AnimatedSubtitle = animated(HomeSubtitle);

const Home = () => {
  const titleProps = useSpring({ 
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  const subtitleProps = useSpring({ 
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000, delay: 500 }
  });

  return (
    <HomeContainer>
      <BackgroundSection>
        <AnimatedTitle style={titleProps}>Welcome to NYU Barbell</AnimatedTitle>
        <AnimatedSubtitle style={subtitleProps}>Join us for lifting, community, and fun!</AnimatedSubtitle>
        <ScrollLink to="about" smooth={true} duration={1000}>
          <ScrollDownIcon />
        </ScrollLink>
      </BackgroundSection>
      <Section id="about">
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
        <CTAButton href="contact">Get Involved</CTAButton>
      </Section>
      <Section id="contact">
        <SectionTitle>Contact Us</SectionTitle>
        <SectionContent>
          Have questions or want to get involved? Reach out to us at contact@nyubarbell.com or follow us on our social media platforms. We’d love to hear from you!
        </SectionContent>
      </Section>
    </HomeContainer>
  );
};

export default Home;
