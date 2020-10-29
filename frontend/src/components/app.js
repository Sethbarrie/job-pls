import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import SearchContainer from './search/search_container';
import GitSearchContainer from './search/git_search_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util'

const App = () => {
    return (
        <div> 
<<<<<<< HEAD
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <ProtectedRoute path="/jobs" component={PostIndexContainer}/>
            <ProtectedRoute path="/search" component={SearchContainer}/>
            <ProtectedRoute path="/git_search" component={GitSearchContainer}/>
            <Route path="/" component={SignupFormContainer}/>
=======
            <Route path="/login" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
            <Route path="/jobs" component={PostIndexContainer}/>
            <Route path="/search" component={SearchContainer}/>
            <Route exact path="/" component={SignupFormContainer}/>
>>>>>>> main

        </div>
    )
}

export default App