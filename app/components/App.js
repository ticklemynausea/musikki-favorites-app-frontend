import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

import config from '../config/config'

class App extends React.Component {

    constructor() {

        super()

        this.state = {
            session: {
                loggedIn: false,
                userData: {
                }
            },
            menuItems: []
        }

    }

    doLogIn() {
        console.log('App.doLogIn')
        this.setState({
            session: {
                loggedIn: true,
                userData: {
                    'username': 'mario',
                    'avatar': 'http://www.gravatar.com/avatar/2950727ab92407de444f43c3597e005b'
                }
            },
            menuItems: [
                { label: 'Home', action: 'showHome' },
                { label: 'Collection', action: 'showCollection' }
            ]
        });

    }

    doLogOut() {
        console.log('App.doLogOut')
        this.setState({
            session: {
                loggedIn: false,
                userData: {
                }
            },
            menuItems: []
        })

    }

    render() {

        return (
            <div>
                <Header appState={this.state} doLogIn={this.doLogIn.bind(this)} doLogOut={this.doLogOut.bind(this)} />
                <MainSection />
            </div>
        )

    }

}

export default App;