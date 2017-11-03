import React, { Component } from 'react';
import Tablero from './Tablero';
import './Estilo.css';

class Juego extends React.Component {
    render() {
        return (
            <div className="juego">
                <div className="tablero-juego">
                    <Tablero />
                </div>
                <div className="info-juego">
                    <div>{/* estado*/}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Juego;