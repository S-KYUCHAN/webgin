import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: coral;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0;
  padding: 10px;
`

const Title = styled.p`
  textAlign: 'center';
  fontSize: '30px;
`

function WithListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />
    return (
      <Wrapper>
        <Title>
        Hold on, fetching data may take some time :)
        </Title>
      </Wrapper>
    );
  };
}

export default WithListLoading;