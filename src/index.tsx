import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Home, News, Notes} from "./Pages";

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/notes" component={Notes}/>
      </Switch>
    </App>
  </BrowserRouter>),
  document.getElementById('root'));


serviceWorker.unregister();
