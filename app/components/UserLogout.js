import React from 'react';
import { NavDropdown, MenuItem, ButtonInput, Image, Grid, Row, Col } from 'react-bootstrap';

class UserLogout extends React.Component {

    constructor() {
        super();

        this.state = {
            image: 'http://www.gravatar.com/avatar'
        };
    }

    componentDidMount() {

    }

    getGravatarURL(email) {
        let md5 = require('md5');
        let hash = !!email ? md5(email) : '';
        return '//www.gravatar.com/avatar/' + hash;
    }

    render() {

        this.state = {
            image: this.getGravatarURL(this.props.appState.session.userData.email)
        };

        return (
            <NavDropdown id='collapsible-navbar-dropdown' title={this.props.appState.session.userData.username}>
                <form>
                    <Image src={this.state.image} thumbnail />
                    <hr/>
                    <ButtonInput onClick={this.props.doFn} bsSize='small' value='Logout' />
                </form>
            </NavDropdown>
        );
    }

}

export default UserLogout;