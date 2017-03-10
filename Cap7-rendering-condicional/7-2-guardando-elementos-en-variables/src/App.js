import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {estaAutenticado: false};
  }

  manejarLoginClick = () => {
    this.setState({estaAutenticado: true});
  }

  manejarLogoutClick = () => {
    this.setState({estaAutenticado: false});
  }

  render() {
    const estaAutenticado = this.state.estaAutenticado;

    let boton=null;
    if (estaAutenticado) {
      boton=<BotonLogout onClick = {this.manejarLogoutClick} />;
    } else {
      boton=<BotonLogin onClick = {this.manejarLoginClick} />;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Saludo estaAutenticado={estaAutenticado} />
          {boton}
        </div>
      </div>
    );
  }
}

function SaludoVisitante(props) {
  return <h1>Regístrate, por favor.</h1>
}

function SaludoUsuario(props) {
  return <h1>¡Bienvenido, de vuelta!</h1>
}

function Saludo(props) {
  const estaAutenticado = props.estaAutenticado;
  if (estaAutenticado) {
    return <SaludoVisitante />;
  } else {
    return <SaludoUsuario />;
  }
}

function BotonLogin(props) {
  return (
    <button onClick={props.onClick}>
      Salir
    </button>
  );
}

function BotonLogout(props) {
  return (
    <button onClick={props.onClick}>
      Ingresar
    </button>
  );
}

export default App;
