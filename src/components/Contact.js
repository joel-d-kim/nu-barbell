import React, { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaTimesCircle, FaSpinner } from 'react-icons/fa';

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

const ContactContainer = styled.main`
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
  animation: ${fadeIn} 1s ease-in;
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
  animation: ${fadeIn} 1s ease-in;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #57068c;
    box-shadow: 0 0 10px rgba(87, 6, 140, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #57068c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    background-color: #45046c;
    transform: scale(1.05);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  color: ${props => (props.success ? 'lightgreen' : 'red')};
  display: flex;
  align-items: center;
  margin-top: 20px;
  animation: ${fadeIn} 1s ease-in;
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;

const Spinner = styled(FaSpinner)`
  margin-left: 10px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/subscribe', { email });
      setMessage(response.data.message);
      setSuccess(true);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred. Please try again.');
      setSuccess(false);
    }

    setLoading(false);
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
        <SubmitButton type="submit" disabled={loading}>
          Subscribe
          {loading && <Spinner />}
        </SubmitButton>
      </Form>
      {message && (
        <Message success={success}>
          <IconContainer>
            {success ? <FaCheckCircle /> : <FaTimesCircle />}
          </IconContainer>
          {message}
        </Message>
      )}
    </ContactContainer>
  );
};

export default Contact;
