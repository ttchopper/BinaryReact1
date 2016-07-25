import React, { Component } from 'react';
class User extends Component {
    

    render() {
        return (
            <div className='list'>
                <li className='list-group-item'>{ this.props.user.userName }</li>
                <button 
                    type='button' 
                    className='btn btn-danger' 
                    onClick={() => this.props.onRemove(this.props.index) }
                >Remove</button>
            </div>
        );
    }
}

export default User;