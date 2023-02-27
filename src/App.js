import React from 'react';
import './styles.css';
import Stock from './Stock';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listastock: [
        {
          nome: 'AAPL',
          quotazione: 250
        }
      ]
    };
    console.log('1g) GENITORE: Creo istanza');
  }

  static getDerivedStateFromProps(np, ps) {
    return null;
  }

  componentDidMount() {
    console.log('3g) GENITORE: DidMount');
    //const stock = [{ nome: 'AAPL', quotazione: 350 }];
    // this.setState((props, state) => {
    //   listastock: stock;
    // });
  }

  componentDidUpdate(prevProps) {
    //console.log('4g) FIGLIO: DidUpdate');
  }

  aggiornaStock = (e) => {
    e.preventDefault();
    const newStock = { nome: 'AMZN', quotazione: 1200 };
    this.setState({ listastock: [newStock] });
  };

  componentWillUnmount = () => {
    console.log('5g) GENITORE: Componente App Distrutto');
  };

  render() {
    console.log('2g) GENITORE: Render');
    return (
      <div className="App">
        <h1>Applicazione Stock Quote</h1>
        <button onClick={this.aggiornaStock}>Top Stock</button>
        {this.state.listastock.map((el, index) => (
          <Stock key={index} datistock={el} />
        ))}
      </div>
    );
  }
}
