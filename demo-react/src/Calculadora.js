import React, { Component } from 'react';

class Calculadora extends Component {
    render() {
        let tabla=[];
        for (let index = this.props.inicio; index <= this.props.fin; index++) {
            tabla.push(<li>{this.props.numero} x {index} = {this.props.numero * index}</li>);
        }
        return (
            <div>
                <h1>Tabla de multiplicar del {this.props.numero}</h1>
                <ul>
                    {tabla}
                </ul>
            </div>
        )
    }
}

export default Calculadora;