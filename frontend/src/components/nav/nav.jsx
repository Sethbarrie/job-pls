import React from 'react';
import { Link } from 'react-router-dom';
import PostIndexContainer from '../postings/post_index_container';
import './nav.css'
import SearchBarContainer from '../search/search_container';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.openUsers = this.openUsers.bind(this);
    }

    openUsers(){
        // debugger
        console.log('click');
        <PostIndexContainer openUsers={true}/>

    }



  

    render() {
        console.log('currentUser:')
        console.log(this.props.currentUser)

        if (this.props.currentUser === undefined) return null;

        return (
            <div className='nav-container'>
                {/* <div> */}
                    {/* <div id='flex-tabs'> */}
                        {/* <div className='nav-search'> */}
                        <div>
                            <SearchBarContainer/>
                        </div>
                        {/* </div> */}
                        {/* <div id='flex-tabs'>
                            <ul>
                                <li id='tab'><Link to='/jobs'>job pls</Link></li>
                                <li id='tab'><p onClick={() => this.openUsers()}>users</p></li>
                                <li id='tab'><Link to='/search'>search</Link></li>

                            </ul>
                        </div> */}
                    {/* </div> */}
                {/* </div> */}

            </div>
        )
    }
}

export default Nav;
