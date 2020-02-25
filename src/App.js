import React from 'react';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/Reducers.js";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";

import './App.css';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

function App() {
  return (
    <div className="App" store={store}>
      <ul>
        <li>CMS using firebase: https://hackernoon.com/how-i-built-a-content-management-system-for-a-react-app-in-one-day-269df17f5509</li>
        <li>Async Await Integration</li>
        <li>Router either based on hash or direct / based</li>
      </ul>
    </div>
  );
}

export default App;
