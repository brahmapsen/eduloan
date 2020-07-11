import React from "react";
import { ThemeProvider } from "@material-ui/styles"; //NOTE it is NOT @material-ui/core/styles
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import theme from "./ui/Theme";
import Header from './ui/Header';

function App() {
  return (
       <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Header />
              <Switch>
                  <Route exact path="/" component={() => <div style={{height: "700px"}}>Home</div> } />
              </Switch>
          </BrowserRouter>
       </ThemeProvider>
  );
}

export default App;