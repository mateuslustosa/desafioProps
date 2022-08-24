import React, { Component } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main.js";

export default class Props extends Component {
  render() {
    return (
      <>
        <Header title="Informações" />
        <Main nome="Mateus Lustosa" idade="25" queroEstudar="ADS" />
      </>
    );
  }
}
