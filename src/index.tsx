import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {Home, News, Notes} from "./Pages";

import store from "./stores/store";

ReactDOM.render((
  <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/notes" component={Notes}/>
          </Switch>
        </App>
      </Router>
  </Provider>
  ),
  document.getElementById('root'));


serviceWorker.unregister();
