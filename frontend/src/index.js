import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';

import rootReducer from "./store/reducers/root-reducer";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {AuthorizationStatus} from "./utils/const";
import {requireAuthorization} from "./store/actions/action";
import {redirect} from "./store/middlewares/redirect";
import {checkAuth} from './store/actions/api-action';

const api = createAPI(()=> store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(api)),
  applyMiddleware(redirect)
));



Promise.all([
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
})
.catch(() => {});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
