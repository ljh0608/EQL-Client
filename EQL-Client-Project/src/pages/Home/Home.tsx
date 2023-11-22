import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return <Title1> Home </Title1>;
};

export default Home;

const Title1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.body2};
  margin: 2rem;
`;
