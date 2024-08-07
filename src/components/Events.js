import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import pastEvents from './PastEvents.js'; // Assuming the file is in the same directory

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

const EventsContainer = styled.main`
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

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const EventCard = styled.div`
  background-color: white;
  margin: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s;
  ${EventCard}:hover & {
    transform: scale(1.05);
  }
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const EventDate = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const EventDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const GoogleCalendarIframe = styled.iframe`
  width: 100%;
  height: 600px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const EventsPage = () => {
  const [pastEventsList, setPastEventsList] = useState([]);

  useEffect(() => {
    setPastEventsList(pastEvents);
  }, []);

  return (
    <EventsContainer>
      <Title>Events</Title>
      <Section>
        <SectionTitle>Past Events</SectionTitle>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {pastEventsList.map((event, index) => (
            <EventCard key={index}>
              <EventImage src={event.image} alt={`${event.title} image`} />
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventDescription>{event.description}</EventDescription>
            </EventCard>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle>Upcoming Events</SectionTitle>
        <GoogleCalendarIframe
          src="https://calendar.google.com/calendar/embed?src=c_e1776fcdf08062d55ee232ab8db3c2d4312e827c3eee6659ba588c0096baa221%40group.calendar.google.com&ctz=America%2FNew_York"
          frameBorder="0"
          scrolling="no"
        />
      </Section>
    </EventsContainer>
  );
};

export default EventsPage;
