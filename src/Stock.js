import React from 'react';
import './styles.css';
import PropType from 'prop-types';

export default class Stock extends React.Component {
  constructor(props) {
    super(props);
    const { nome, quotazione } = this.props.datistock;
    this.state = { nome, quotazione };
    console.log('1f) FIGLIO: Creo istanza ' + nome);
  }

  static getDerivedStateFromProps(np, ns) {
    console.log('1fa) FIGLIO: Check props e state');
    if (
      np.datistock.quotazione !== ns.quotazione &&
      np.datistock.nome !== ns.nome
    ) {
      return {
        nome: np.datistock.nome,
        quotazione: np.datistock.quotazione
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    console.log('3f) FIGLIO: DidMount ' + this.props.datistock.nome);
  }

  componentDidUpdate(pp, ps) {
    console.log('4f) FIGLIO: DidUpdate ' + this.props.datistock.nome);
    if (pp.datistock.quotazione !== this.props.datistock.quotazione) {
      this.setState((state, props) => ({
        quotazione: props.datistock.quotazione
      }));
    }
  }

  aggiornaStock = () => {
    this.setState((state, props) => ({ quotazione: state.quotazione + 10 }));
  };

  render() {
    console.log('2f) FIGLIO: render ' + this.props.datistock.nome);
    return (
      <div className="stock">
        <div className="row">
          <div className="col">
            <h2>{this.props.datistock.nome}</h2>
            <p>Nasdaq</p>
          </div>
          <div className="col">
            <h2>{this.state.quotazione}</h2>
            <p>HH:MM:SS</p>
          </div>
          <div className="col">
            <h2>Var</h2>
            <p>%</p>
          </div>
          <div className="col">
            <button onClick={this.aggiornaStock}>Aggiorna</button>
          </div>
        </div>
      </div>
    );
  }
}

Stock.defaultProps = {
  nome: 'ND',
  quotazione: 0
};

Stock.propTypes = {
  nome: PropType.string,
  quotazione: PropType.number
};
