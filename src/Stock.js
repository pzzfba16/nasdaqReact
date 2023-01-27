import React from 'react';
import PropType from 'prop-types';

export default class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eta: this.props.eta };
  }

  aggiornaStato = () => {
    this.setState((state, props) => ({ eta: state.eta + 1 }));
    if (this.state.eta >= 18) {
      this.props.showEta(this.props.nome);
      this.props.showMSG(true);
    }
  };

  realTime = () => {
    setInterval(() => this.aggiornaStato(), 3000);
  };

  render() {
    const { nome, fondatore } = this.props;
    return (
      <div>
        <h1>
          Io sono {nome}, età {this.state.eta}
        </h1>
        <p>Fondatore di: {fondatore}</p>
        {/* <p>{this.state.eta >= 18 ? 'Sono maggiorenne' : 'Sono minorenne'}</p> */}
        <button onClick={this.realTime}>Aggiorna</button>
      </div>
    );
  }
}

Stock.defaultProps = {
  nome: 'ND',
  fondatore: 'ND',
  eta: 'ND'
};

Stock.propTypes = {
  nome: PropType.string,
  fondatore: PropType.string,
  eta: PropType.number
};
