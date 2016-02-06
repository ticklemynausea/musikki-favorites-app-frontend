import React from 'react';
import { NavDropdown, MenuItem, ButtonInput } from 'react-bootstrap';

class UserLogout extends React.Component {

    componentDidMount() {
        console.log('UserLogout')
        console.log(this.props)
    }

    render() {
        return (
            <NavDropdown title={this.props.appState.session.userData.username} id='collapsible-navbar-dropdown'>
                <form>
                    <MenuItem>
                        <img src={this.props.appState.session.userData.avatar} />
                    </MenuItem>
                    <MenuItem>
                        <ButtonInput onClick={this.props.doFn} bsSize='small' type='submit' value='Logout' />
                    </MenuItem>
                </form>
            </NavDropdown>
        )
    }

}

export default UserLogout;