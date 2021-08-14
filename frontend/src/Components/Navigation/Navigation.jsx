import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
`

function Navigation() {
    return (
      <Wrapper>
        {/* <Link to="/">Home</Link> */}
        <Link to="/posts">Post</Link>
      </Wrapper>
    );
  }
  
  export default Navigation;