/* TODO: component includes some hackery to keep the dropdown open when clicking inputs */

import React from 'react';
import { NavDropdown, MenuItem, Input, ButtonInput } from 'react-bootstrap';

class UserLogin extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            open: false
        }

        this.onToggle = this.onToggle.bind(this)
        this.inputWasClicked = this.inputWasClicked.bind(this)
        this.loginWasClicked = this.loginWasClicked.bind(this)

    }

    componentDidMount() {

        console.log('UserLogin props', this.props)

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

    loginWasClicked() {

        this.setState({
            open: false
        })

        this.props.doFn()
    }

    render() {

        return (
            <NavDropdown title={this.props.title} id='dropdown-custom-menu'
                         onToggle={this.onToggle}
                         open={this.state.open}>

                <Input onSelect={this.inputWasClicked} bsSize='small' type='text'
                       label='Username' placeholder='Enter text' />

                <Input onSelect={this.inputWasClicked} bsSize='small' type='password'
                       label='Password' placeholder='Enter text' />

                <ButtonInput onClick={this.loginWasClicked} bsSize='small' type='submit'
                       value='Login' />

            </NavDropdown>
        );


    }

}

export default UserLogin;