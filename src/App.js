import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import TransactionPage from "./pages/TransactionPage";
import OverviewPage from "./pages/OverviewPage";
import { backgroundColor } from "./constants/colors";

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/overview" component={OverviewPage} />
          <Route path="/" exact component={TransactionPage} />
          <Route render={() => <span>Not found!</span>} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

injectGlobal`
  html {
    scroll-behavior: smooth;
    height: 100%;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    overflow: scroll;
    height: 100%;
    background-color: ${backgroundColor};
  }
`;
