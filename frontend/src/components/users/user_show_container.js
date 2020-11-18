import { connect } from 'react-redux';
import UserShow from './user_show';
import { fetchUser , fetchAllUsers } from '../../actions/user_actions';
import { fetchPostings, fetchPosting, fetchUserPostings, fetchCurrentUserPostings, setLoading } from '../../actions/posting_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities: { posts , users }, session }, ownProps) => {
    let user = users[ownProps.match.params.userId];
    return {
        currentUser: session.user,
        user,
        users
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchUserPostings: (id) => dispatch(fetchUserPostings(id)),
        fetchPostings: () => dispatch(fetchPostings()),
        fetchPosting: jobId => dispatch(fetchPosting(jobId)),
        fetchCurrentUserPostings: userId => dispatch(fetchCurrentUserPostings(userId)),
        setLoading: () => dispatch(setLoading())
    }
}

export default withRouter(connect(mSTP, mDTP)(UserShow));