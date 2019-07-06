import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainPage from './containers/MainPage/MainPage';
import Navigation from './components/Navigation/Navigation';
import Contractors from './containers/Contractors/Contractors';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
                <Route path={'/contractors'} component={Contractors}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
