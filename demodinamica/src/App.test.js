import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Mail from './Mail';
import ReactTestUtils from 'react-dom/test-utils'

let div;
let usuarioNuevo;
describe('test básicos', () => {

  beforeEach(function() {
    div = null;
    usuarioNuevo = {nombre:"Juan", email:"juan@correo.es"};
  });

  it('renders without crashing', () => {
    div = document.createElement('div');
    ReactDOM.render(<App />, div);
  })

  it('renders Home without crashing', () => {
    div = document.createElement('div');
    ReactDOM.render(<Home />, div);
  });

  it('renders Home with H2', () => {
    const home = ReactTestUtils.renderIntoDocument(<Home/>);
    var hijos = ReactTestUtils.scryRenderedDOMComponentsWithTag(home, "h2");
    expect(hijos.length).toEqual(2);
  });

  it('Mail ok', () => {
    const mail = ReactTestUtils.renderIntoDocument(<Mail usuario={usuarioNuevo}/>);
    expect(mail.props.usuario.nombre).toEqual("Juan");
  })

  it('Mail ok', () => {
    const mail = ReactTestUtils.renderIntoDocument(<Mail usuario={usuarioNuevo}/>);
    const domMail = ReactDOM.findDOMNode(mail);
    expect(domMail.innerHTML).toMatch("juan");
    })


});


