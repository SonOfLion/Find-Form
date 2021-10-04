import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FormFind from './components/form-find/FormFind';
import ErrorPage from './components/erro-page/ErroPage';
import { TrackProvider } from './context';

import './app.scss';

function App() {
  return (
    <main className="main-container">
      <TrackProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={ "/" } >
              <FormFind />
            </Route>
            <Route component={ ErrorPage } />
          </Switch>
        </BrowserRouter>
      </TrackProvider>
    </main>
  );
}

export default App;