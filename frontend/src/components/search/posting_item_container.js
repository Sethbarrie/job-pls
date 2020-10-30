import {connect} from 'react-redux';
import { composePosting, deletePosting, fetchUserPostings } from '../../actions/posting_actions';
import PostingItem from './posting_item';

const mapStateToProps = state => {
    debugger
    let userPostingsId = state.entities.posts.user.map(obj => obj._id) 
    return {
        userPostings: userPostingsId,
        userId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserPostings: userId => dispatch(fetchUserPostings(userId)),
        composePosting: posting => dispatch(composePosting(posting)),
        deletePosting: postingId => dispatch(deletePosting(postingId))
        // searchPosting: postingParams => dispatch(searchPosting(postingParams)),
        // clearSessionErrors: () => dispatch(clearSessionErrors())
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(PostingItem);