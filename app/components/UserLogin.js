/* TODO: component includes some hackery to keep the dropdown open when clicking inputs */

import React from 'react';
import { NavDropdown, MenuItem, Input, ButtonInput } from 'react-bootstrap';

class UserLogin extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            fields: {
                username: '',
                password: ''
            }
        }

    }

    componentDidMount() {

    }

    onInputChange(field, e) {
        console.log('!')
        let newState = this.state;
        newState.fields[field] = e.target.value;
        this.setState(newState)
    }

    onFormSubmit(event) {

        event.preventDefault()

        let newState = this.state;
        newState.open = false;
        this.setState(newState)
        this.props.doFn(this.state.fields)

    }

    render() {

        return (

            <form id='login-form' onSubmit={this.onFormSubmit.bind(this)} >

              <input onChange={this.onInputChange.bind(this, 'username')} bsSize='small' type='text' placeholder='username' className='form-control' />

              <input onChange={this.onInputChange.bind(this, 'password')} bsSize='small' type='password' placeholder='password' className='form-control' />

              <input bsSize='small' type='submit' value='Login' className='btn btn-primary' />

            </form>

        );


    }

}

export default UserLogin;