import React from 'react';

export default class SearchFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cerca: 'Apple',
      note: '',
      azione: '',
      ck1: false,
      ck2: false,
      oggi: false,
      ieri: false
    };
  }

  onChangeCerca = (e) => {
    this.setState({ cerca: e.target.value });
  };

  onChangeNote = (e) => {
    this.setState({ note: e.target.value });
  };

  onChangeSelect = (e) => {
    this.setState({ azione: e.target.value });
  };

  onChangeCk = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  onChangeRadio = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  invioForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.cerca);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.invioForm}>
          <input
            type="text"
            name="cerca"
            value={this.state.cerca}
            onChange={this.onChangeCerca}
          />
          <p></p>
          <textarea
            name="note"
            value={this.state.note}
            onChange={this.onChangeNote}
          />
          <p></p>
          <select
            name="azione"
            value={this.state.azione}
            onChange={this.onChangeSelect}
          >
            <option value="-">Seleziona</option>
            <option value="Apple">Apple</option>
            <option value="Google">Google</option>
          </select>
          <p></p>
          <input
            type="checkbox"
            name="ck1"
            checkbox={this.state.ck1}
            onChange={this.onChangeCk}
          />
          <input
            type="checkbox"
            name="ck2"
            checkbox={this.state.ck1}
            onChange={this.onChangeCk}
          />
          <p></p>
          <input
            type="radio"
            name="oggi"
            checked={this.state.oggi}
            onChange={this.onChangeRadio}
          />
          <input
            type="radio"
            name="ieri"
            checked={this.state.ieri}
            onChange={this.onChangeRadio}
          />
          <p></p>
          <input type="submit" value="Invio" />
        </form>
      </div>
    );
  }
}
