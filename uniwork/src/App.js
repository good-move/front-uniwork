import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import MainPage from './containers/MainPage/MainPage';
import Contractors from './containers/Contractors/Contractors';
import Customers from './containers/Customers/Customers';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import SignInPage from "./containers/SignInPage/SignInPage";
import PersonalAccount from "./containers/PersonalAccount/PersonalAccount";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import AddCourseForm from "./components/AddCourseForm/AddCourseForm";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ MainPage } />
          <Route path={'/customers'} component={ Customers } />
          <Route path={'/contractors'} component={ Contractors } />
          <Route path={'/customers/:id/info'} component={ CustomerInfo } />
          <Route path={'/signin'} component={ SignInPage } />
          <Route path={'/accounts/:id'} component={ PersonalAccount } />
          <Route path={'/courses/:id'} component={ CourseInfo } />
          <Route exact path={'/course/add'} component={ AddCourseForm } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
