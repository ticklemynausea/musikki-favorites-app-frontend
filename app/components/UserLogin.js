/* TODO: component includes some hackery to keep the dropdown open when clicking inputs */

import React from 'react';
import { NavDropdown, MenuItem, Input, ButtonInput } from 'react-bootstrap';

class UserLogin extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            open: false,
            fields: {
                username: '',
                password: ''
            }
        }

        this.onToggle = this.onToggle.bind(this)
        this.inputWasClicked = this.inputWasClicked.bind(this)
        this.inputWasTabbed = this.inputWasTabbed.bind(this)
        this.loginWasClicked = this.loginWasClicked.bind(this)

    }

    componentDidMount() {

    }

    onToggle(open) {

        if (this.state.inputWasClicked) {
          this.state.inputWasClicked = false;
          return;
        }

        this.setState({
            open: open
        });

    }

    inputWasClicked() {

        this.state.inputWasClicked = true;

    }

    inputWasChanged(field, e) {
        console.log('!')
        let newState = this.state;

        newState.fields[field] = e.target.value;
        this.setState(newState)

    }

    inputWasTabbed() {
        console.log('tab')
    }

    loginWasClicked() {

        let newState = this.state;

        newState.open = false;
        this.setState(newState)

        this.props.doFn(this.state.fields)
    }

    render() {

        return (
            <NavDropdown title={this.props.title} id='dropdown-custom-menu'
                         onToggle={this.onToggle}
                         open={this.state.open}>

                <Input onSelect={this.inputWasClicked}
                       onChange={this.inputWasChanged.bind(this, 'username')}
                       onBlur={this.inputWasTabbed}
                       bsSize='small' type='text'
                       label='Username' placeholder='Enter text' />

                <Input onSelect={this.inputWasClicked}
                       onChange={this.inputWasChanged.bind(this, 'password')}
                       onBlur={this.inputWasTabbed}
                       bsSize='small' type='password'
                       label='Password' placeholder='Enter text' />

                <ButtonInput onClick={this.loginWasClicked} bsSize='small' type='submit'
                       value='Login' />

            </NavDropdown>
        );


    }

}

export default UserLogin;