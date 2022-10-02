import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, {persistor} from './store/store'

import App from './App'

const container = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>hello</div>} persistor={persistor}> 
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  container
);

