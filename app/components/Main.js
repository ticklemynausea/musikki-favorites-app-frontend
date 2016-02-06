import React from 'react';
import Header from './Header';
import Content from './Content';
// import { Button } from 'react-bootstrap';

class Main extends React.Component {

    constructor() {

        super()

        this.state = {
            session: {
                loggedIn: false,
                userData: {
                    username: 'mario',

                }
            },
            menuItemsLoggedIn: [
                { label: 'Home', action: 'showHome' },
                { label: 'Collection', action: 'showCollection' }
            ],
            menuItemsLoggedOut: [
            ]
        };

        this.doLogOut = this.doLogOut.bind(this)

        this.doLogIn = this.doLogIn.bind(this)

    }

    doLogIn() {
        console.log('doLogIn')
        this.setState({
            loggedIn: true,
            userData: {
                username: 'mario'
            }
        });

    }

    doLogOut() {
        console.log('doLogOut')
        this.setState({ loggedIn: false, userData: {} });

    }

    render() {
        return (
            <div>
                <Header sessionState={this.state.session} doLoginFn={this.doLogIn} doLogoutFn={this.doLogOut} />
                <Content />
            </div>
        )
    }

}

export default Main;