import React, { Component } from 'react';
import Pieza from './Pieza';

function calcularGanador(estadoTablero) {
    const lineas = [
        [0,1,2],
        [3,4,5],
        [6,7,8]
    ];
}

class Tablero extends React.Component {
    constructor() {
        super();
        this.state = {
            piezas: Array(9).fill(null),
            turnoX: true
        };
    }

    handleClick(i) {
        const piezasActuales = this.state.piezas.slice();
        piezasActuales[i] = this.state.turnoX ? 'X' : 'O';
        this.setState({piezas: piezasActuales, turnoX: !this.state.turnoX});
    }

    renderPieza(i) {
        return <Pieza valor={this.state.piezas[i]}
                onClick={() => this.handleClick(i)} />;
    }
    render() {
        const ganador = calcularGanador(this.state.estadoTablero);
        let estado;
        if (ganador) {
            estado = "Ganador: " + ganador;
        }
        else {
            estado = 'Siguiente jugador: ' + (this.state.turnoX ? 'X' : 'O');
        }
        return (
            <div>
                <div className="estado">{estado}</div>
                <div className="filaTablero">
                    {this.renderPieza(0)}
                    {this.renderPieza(1)}
                    {this.renderPieza(2)}
                </div>
                <div className="filaTablero">
                    {this.renderPieza(3)}
                    {this.renderPieza(4)}
                    {this.renderPieza(5)}
                </div>
                <div className="filaTablero">
                    {this.renderPieza(6)}
                    {this.renderPieza(7)}
                    {this.renderPieza(8)}
                </div>
            </div>
        );
    }
}

export default Tablero;