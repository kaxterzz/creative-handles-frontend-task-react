import React from 'react'
import styled from "styled-components";

import logo from "../../assets/logo-2.svg";

const Brand = () => {
  return (
    <Image src={logo} alt="Company Logo" />
  )
}

export default Brand

const Image = styled.img`
  height: 100%;
  margin: auto 0;
`;