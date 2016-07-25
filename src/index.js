import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewUser from './components/new_user';
import UserList from './components/user_list';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            users: [] 
        };
    }

    

//add User on Click Button
    addUser(user) { 
        this.setState({ 
            users: this.state.users.concat(user) 
        });
    }

// remove User on Click Button
    removeUser(userToRemove) {
        this.setState({ 
            users: this.state.users.filter((_, user) => {
                return userToRemove !== user;
            }) 
        });
    }

   
    render() {
        return (
            <div>
                <NewUser 
                    onAdd={ this.addUser.bind(this) } 
                    userName={ this.state.users } />
                
                <UserList 
                    users={ this.state.users } 
                    onRemove={this.removeUser.bind(this) } />
            </div>
        );
    }
}



ReactDOM.render( <App /> , document.querySelector('.container'));
