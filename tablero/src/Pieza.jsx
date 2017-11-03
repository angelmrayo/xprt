import React, { Component } from 'react';

class Pieza extends React.Component {
    constructor() {
        super();
        this.state = {
            valor: null
        };
    }
    render() {
        return (
            <button className="pieza" onClick={this.props.onClick}>
                {this.props.valor}
            </button>
        );
    }
}

export default Pieza;

