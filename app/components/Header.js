import React from 'react';
import UserLogin from './UserLogin';
import UserLogout from './UserLogout';
import { Navbar, Nav, MenuItem } from 'react-bootstrap';

class Header extends React.Component {

    constructor() {
        super()

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    doLogIn(formData) {
        this.props.doLogIn(formData)
    }

    doLogOut() {
        this.props.doLogOut()
    }

    headerMenuClick(event, eventKey) {
        this.props.doNav(eventKey)
    }

    render() {

        let userMenu;
        let that = this;

        if (this.props.appState.session.loggedIn) {
            userMenu = <UserLogout title='Logout' appState={this.props.appState} doFn={this.doLogOut.bind(this)} />
        } else {
            userMenu = <UserLogin title='Login' appState={this.props.appState} doFn={this.doLogIn.bind(this)} />
        }

        return (
            <Navbar id='mainNavBar' fixedTop inverse fluid>
                <Navbar.Header>
                    <Navbar.Brand onClick={this.headerMenuClick.bind(this, '', 'welcome')}>
                        My Favorite Artists
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav onSelect={this.headerMenuClick.bind(this)}>
                        {
                            this.props.appState.menuItems.map(function(item, n) {
                                return (
                                    <MenuItem key={n} eventKey={item.action}>{item.label}</MenuItem>
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