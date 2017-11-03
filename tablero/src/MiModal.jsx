import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export default class MiModal extends Component {
    static propTypes = {
        texto: PropTypes.string.isRequired,
        alto: PropTypes.number.isRequired,
        ancho: PropTypes.number.isRequired,
        onYes: PropTypes.func.isRequired,
    };
    static defaultProps = {
        texto: "",
        alto: 100,
        ancho: 200,
    };
    render() {
        <div width={this.props.ancho} height={this.props.alto}>
            <h2>{this.props.texto}</h2>
            <button onClick={this.props.onYes}>Yes</button>
        </div>
    };
};