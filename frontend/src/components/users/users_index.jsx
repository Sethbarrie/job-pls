import React from 'react'
import './users_index.css'
import UsersIndexItemContainer from './users_index_item_container'
class UsersIndex extends React.Component {
    constructor(props){
        super(props)
        this.props.fetchAllUsers()
    }
    // componentDidMount(){
    //     this.props.fetchAllUsers()
    // }

    render(){
        debugger
        if (this.props.currentUser === undefined) return null
        return <ul className="users-index">
            {this.props.users.map(user => {
                debugger
                if (user._id === this.props.currentUser._id) return null
                return <UsersIndexItemContainer key={user.id} user={user}/>
            })
        }
        </ul>
    }
}

export default UsersIndex