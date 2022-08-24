import React, { Component } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: blue;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default class Info extends Component {
  render() {
    return (
      <>
        <H1>{this.props.nome}</H1>
      </>
    );
  }
}
