import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings } from '../../actions/posting_actions';
import {updateAUser} from '../../actions/user_actions';
import PostingItem from './posting_item';

const mapStateToProps = state => {
    let userPostingsId = state.entities.posts.user.map(obj => obj.posting_id) 
    return {
        userPostings: userPostingsId,
        userId: state.session.user._id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId)),
        updateAUser: (userId, data) => dispatch(updateAUser(userId, data))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostingItem);