import React from "react";
import Navigation from "../Navigation/Navigation"
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: coral;
  width: 100%;
  margin: 0;
  padding: 10px;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

const Header = () => {
  return (
    <Wrapper>
      <Title>
        Gin-React Site
      </Title>
      <Navigation />
    </Wrapper>
  )
}

export default Header;