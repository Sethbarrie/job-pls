import React from 'react';
import {connect} from 'react-redux';
import FollowButton from './follow_button';
import {updateAUser, updateTheCurrentUser} from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateAUser: (userId, userData) => dispatch(updateAUser(userId, userData)),
        updateTheCurrentUser: (userId, userData) => dispatch(updateTheCurrentUser(userId, userData)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);