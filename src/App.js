import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FormFind from './components/form-find/FormFind';
import ErrorPage from './components/erro-page/ErroPage';

import './app.scss';

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <Switch>
          <Route exact path={ "/" } >
            <FormFind />
          </Route>
          <Route component={ ErrorPage } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;