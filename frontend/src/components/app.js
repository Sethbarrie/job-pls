import Modal from './modal/modal.jsx';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './postings/post_index_container';
import PostShowContainer from './postings/post_show_container';
import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavShowContainer from './nav/nav_container';

import UsersIndexContainer from './users/users_index_container'
import UserShowContainer from './users/user_show_container'

import './app.css';

// const App = () => {

    
//     return (
//         <div className='app'> 
//             <Modal/>
//             <Route path="/jobs/:jobId" component={PostShowContainer} />
//             <AuthRoute path="/signup" component={SignupFormContainer}/>
//             <AuthRoute path="/login" component={LoginFormContainer}/>
//             <ProtectedRoute path="/jobs" component={PostIndexContainer}/>
//             <Route path="/search" component={SearchContainer}/>
//             <Route exact path="/" component={SignupFormContainer}/>
//             <Route exact path="/users" component={UsersIndexContainer} />
//             <Route exact path="/users/:userId" component={UserShowContainer} />

//         </div>
//     )
    
// }


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    
    
    render() {

        return(
        <div className='app'>
            <NavShowContainer/>
            <Modal />
            <Switch id='content-container'>
                <ProtectedRoute path="/jobs/:jobId" component={PostShowContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <ProtectedRoute path="/jobs" component={PostIndexContainer} />
                <ProtectedRoute path="/search" component={SearchContainer} />
                <ProtectedRoute exact path="/users" component={UsersIndexContainer} />
                <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
                <AuthRoute exact path="/" component={SignupFormContainer} />
                <ProtectedRoute path="*" component={PostIndexContainer} />
            </Switch>

        </div>
    );
    }

}






export default App