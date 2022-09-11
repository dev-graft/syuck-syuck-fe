import ReactDOM from "react-dom";
import App from "./App";
import store from './store/store';
import {Provider} from 'react-redux';

const container = document.getElementById("app");

ReactDOM.render(<Provider store={store}><App /></Provider>, container);
