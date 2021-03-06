import { connect } from 'react-redux';
import React, { Component } from 'react';
import Donut from './Donut';
import '../css/Donuts.css';

class Donuts extends Component {
  render() {
    const { donuts } = this.props;

    return (
      <ul className="Donuts">
        {donuts.map((donut, i) => {
          return (
            <li key={i}>
              <Donut {...donut} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default connect(({ donuts }) => ({ donuts }))(Donuts);
