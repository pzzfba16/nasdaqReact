import React from 'react';
import './styles.css';
import Stock from './Stock';
import SearchFrom from './SearchForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMsg: false,
      maggiorenne: ''
    };
    this.mostraMsg = this.mostraMsg.bind(this);
  }

  mostraMsg = (evt) => {
    alert('Stringa passata: ' + evt);
    this.setState({ showMsg: true });
  };

  showMaggiorenne = (nome) => {
    this.setState({ maggiorenne: nome });
  };

  showMSG = (mostra) => {
    this.setState({ showMSG: mostra });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          {/* <p onClick={() => this.mostraMsg('Davide')}>Applicazione React</p>
          {this.state.showMsg && <p>Messaggio nascosto</p>} */}
          <Stock
            nome="Fabio"
            fondatore="Google"
            eta={12}
            showEta={this.showMaggiorenne}
            showMSG={this.showMSG}
          />
          <Stock
            nome="Salvo"
            fondatore="Apple"
            eta={17}
            showEta={this.showMaggiorenne}
            showMSG={this.showMSG}
          />
          {this.state.showMSG && (
            <p>Figlio maggiorenne: {this.state.maggiorenne}</p>
          )}
          <p></p>
          <SearchFrom />
        </header>
      </div>
    );
  }
}
