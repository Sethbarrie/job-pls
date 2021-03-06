import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, props, formType }) => {
  return <Route path={path} exact={exact} props={props} formType={formType} render={(props) => (
    !loggedIn ? 
        ( <Component {...props} formType={formType}/> ) 
    : 
        ( <Redirect to="/jobs" />
    )
  )} />
  
}

;

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? 
        ( <Component {...props} />) 
      : 
        ( <Redirect to="/" />
      )
    }
  />
);


const mapStateToProps = state => (
  {loggedIn: state.session.isAuthenticated}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));