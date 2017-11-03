import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemsList from './ItemsList';
import Calculadora from './Calculadora';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<ItemsList/>, document.getElementById('lista'));
ReactDOM.render(<Calculadora numero="4" inicio="1" fin="10"/>, document.getElementById('lista'));
registerServiceWorker();
