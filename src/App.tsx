import React, {Fragment} from 'react';
import {Header} from "./components/index";
import "./App.sass";

interface AppProp {
  children: React.ReactNode;
}
const App: React.FC<AppProp> = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};


export default App;
