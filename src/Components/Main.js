import React, { Component } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  color: purple;
  height: 3vh;
`;

export default class Info extends Component {
  render() {
    return (
      <>
        <div>
          <Ul>
            <li>Nome:{this.props.nome}</li>
            <li>Idade:{this.props.idade}</li>
            <li>Quero estudar:{this.props.queroEstudar}</li>
          </Ul>
        </div>
      </>
    );
  }
}
