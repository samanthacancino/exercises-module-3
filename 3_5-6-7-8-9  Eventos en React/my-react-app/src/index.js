import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FormularioPelis from './tema8/eje1/FormularioPelis';
// import OnionHater from './Ej1_OnionHater';
// import Destiny from './Ej2_Destiny';

ReactDOM.render(<FormularioPelis />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
