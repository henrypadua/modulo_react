/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from './Button';

import './style.scss';

class App extends Component {
  state = {
    counter: 0,
  };

  // Metodo que executa automaticamente na inicializacao do componente
  // Carrega informacoes iniciais do componente
  // Event listener
  // --comopentDidMount() {}

  // Configura o estado ou props componente antes da atualizacao
  // Define um ponto de parada para o estado
  // --shouldComponentUpdate(nextProps, nextState) {}

  // Configura o estado ou props do componente depois da atualizacao
  // --comopentDidUpdate(prevProps, prevState) {}

  // Finalizacao do componente
  // Limpar event listener criado na inicializacao
  // --comopentWillDidMount() {}

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1 className="title">Hello Say my name</h1>
        <h2 style={{ color: '#f00' }}>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
