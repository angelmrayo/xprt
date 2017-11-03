import React, {Component} from 'react';

export default class Mail extends Component {
    render() {
        return (
            <div>
                <h2>Bienvenido a Mail {this.props.usuario.nombre}</h2>
                <h3>Su e-mail es {this.props.usuario.email}</h3>
            </div>
        );
    }
}