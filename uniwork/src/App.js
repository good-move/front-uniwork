import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './containers/MainPage/MainPage';
import Navigation from './components/Navigation/Navigation';
import Contractors from './containers/Contractors/Contractors';
import Customers from './containers/Customers/Customers';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path={'/'} component={ MainPage } />
          <Route path={'/customers'} component={ Customers } />
          <Route path={'/contractors'} component={ Contractors } />
          <Route path={'/customers/:id/info'} component={ CustomerInfo } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
