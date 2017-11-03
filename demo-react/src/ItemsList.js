import React, { Component } from 'react';

class ItemsList extends React.Component {
    render() {
        return (
            <div>
                <h2>Lista de items</h2>
                <ul>
                    <li>Ficheros</li>
                    <li>Documentos</li>
                    <li>Otros</li>
                </ul>
            </div>
        );
    }
}

export default ItemsList;