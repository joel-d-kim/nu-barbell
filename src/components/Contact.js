import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContactContainer = styled.main`
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

const EmailLink = styled.a`
  font-size: 1.5rem;
  color: #57068c;
  text-decoration: none;
  margin-bottom: 40px;
  &:hover {
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #57068c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45046c;
  }
`;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }

    setEmail('');
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <EmailLink href="mailto:contact@nyubarbell.com">contact@nyubarbell.com</EmailLink>
      <Form onSubmit={handleSubmit}>
        <Title>Join Our Mailing List</Title>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit">Subscribe</SubmitButton>
      </Form>
      {message && <p>{message}</p>}
    </ContactContainer>
  );
};

export default Contact;
