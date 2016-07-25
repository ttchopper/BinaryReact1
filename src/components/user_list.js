import React, { Component } from 'react';
import User from './user';

class UserList extends Component {
    
    render() {
        let users = this.props.users.map( (user, index) => {
            return <User 
                user={ user } 
                key= { user.id } 
                index={ index } 
                onRemove={ this.props.onRemove} />;
        });
        
        return (
            <ul className='list-group'>
                {users}
            </ul>
        );
    }
}

export default UserList;
