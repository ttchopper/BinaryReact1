import React, { Component } from 'react';


class NewUser extends Component{
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };
    }

    render() {
        return (

            <div className='clearfix'>
                <div className='input-group'>
                    <input 
                        value={ this.state.userName }
                        onChange={ (event) => this.setState({ userName: event.target.value }) }
                        type='text' 
                        className='form-control' 
                        placeholder='Username' 
                    />
                </div>

                <button 
                    type='button' 
                    className='btn btn-success'
                    onClick={ () => {
                        this.props.onAdd({ 
                            userName: this.state.userName, 
                            id: Math.floor(Math.random() * 100000) /* id */
                        });
                    }}
                >Add</button>
            </div>
        );
    }
}

export default NewUser;