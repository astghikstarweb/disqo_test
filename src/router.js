import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Home from './containers/home';

// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={(props) => (
//     Service.isLoggedIn() ? <Component {...props} />
//       : <Redirect to={{
//         pathname: '/login',
//         state: {from: props.location}
//       }}/>
//   )}/>
// );

const routes = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
  </BrowserRouter>
);

const Router = (
    <Provider store={store}>
      {routes}
    </Provider>
);

export default Router;
