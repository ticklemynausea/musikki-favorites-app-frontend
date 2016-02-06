import React from 'react';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

class Header extends React.Component {

    constructor() {
        super()

    }

    componentDidMount() {

        console.log('Header.componentDidMount props', this.props)

    }

    componentDidUpdate() {
        console.log('Header.componentDidUpdate props', this.props)
    }

    doLogIn() {
        console.log(this.state)
        this.props.doLogIn()
    }

    doLogOut() {
        this.props.doLogOut()
    }

    render() {

        let userMenu;

        if (this.props.appState.session.loggedIn) {
            userMenu = <UserLogout appState={this.props.appState} doFn={this.doLogOut.bind(this)} />
        } else {
            userMenu = <UserLogin appState={this.props.appState} title='Login' doFn={this.doLogIn.bind(this)} />
        }

        return (
            <Navbar id='mainNavBar' fixedTop inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        My Favorite Artists
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {
                            this.props.appState.menuItems.map(function(item, n) {
                                return (
                                    <MenuItem key={n}>{item.label}</MenuItem>
                                )
                            })
                        }
                    </Nav>
                    <Nav pullRight eventKey={0}>
                        {userMenu}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default Header