import React from 'react';
import './nav.css';


class NavButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props
        if (currentUser._id === undefined) return null;
    
        return (
            <div className='nav-buttons'>
                <div className='nav-user-info'>
                    <div className='nav-user-greeting'>
                        Hello, {this.props.currentUser.username}
                    </div>
                    <div id='job-pls-logo' onClick={() => this.props.history.push('/jobs')}> My jobs</div>
                </div>
                <button onClick={() => logout()} className="logout-button">logout</button>
            </div>
        )
    }
}

export default NavButtons;
