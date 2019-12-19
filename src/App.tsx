import React, {Fragment} from 'react';
import {Header} from "./components/index";
import "./App.sass";

const App: React.FC = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default App;
