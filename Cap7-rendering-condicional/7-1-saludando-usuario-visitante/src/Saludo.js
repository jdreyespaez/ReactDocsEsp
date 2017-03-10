import React, { Component } from 'react';
import './App.css';

class Saludo extends Component {

  saludandoUsuario(props) {
    return <h1>Bienvenido de vuelta.</h1>;
  }

  saludandoVisitante(props) {
    return <h1>Regístrate, por favor.</h1>;
  }

  Saludo(props) {
    const estaAutenticado = props.estaAutenticado;
    if (estaAutenticado) {
      return <saludandoUsuario />;
    }
    return <saludandoVisitante />;
  }
}

export default Saludo;
