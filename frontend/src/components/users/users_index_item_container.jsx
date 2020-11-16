import React from 'react';
import {connect} from 'react-redux';
import UserIndexItem from './user_index_item';
import { fetchUserPostings } from '../../actions/posting_actions';


const mapStateToProps = state => {
    return {
        currentUser: state.session.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: (id) => dispatch(fetchUserPostings(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndexItem);
