import React from 'react';
import API from '../lib/api'
import Header from '../components/Header';
import MainSection from '../components/MainSection';


class App extends React.Component {

    constructor() {

        super();

        this.state = {
            session: {
                loggedIn: false,
                userData: {
                }
            },
            menuItems: []
        };

    }

    componentDidMount() {

        let storedSession = localStorage.getItem('session');

        if (storedSession !== null) {

            let session = JSON.parse(storedSession);
            console.log('cdm', session)

            if (session.loggedIn) {
                this.setLoggedIn(session.userData)
            } else {
                this.setLoggedOut()
            }

        }

    }

    doLogIn(formData) {

        let that = this

        API.post('/user/login', {
            username: formData.username,
            password: formData.password
        }).then(function(response) {

            if (response.status === 'ok') {

               that.setLoggedIn(response)

            }

        })


    }

    doLogOut() {
        console.log('doLogOut')
        let that = this

        API.post('/user/logout', {}).then(function(response) {

            if (response.status === 'ok') {

                that.setLoggedOut()

            }

        })


    }

    setLoggedIn(userdata) {
        console.log('setLoggedIn', userdata)
        let state = {
            session: {
                loggedIn: true,
                userData: {
                    'username': userdata.username,
                    'email': userdata.email,
                    'auth_token': userdata.auth_token
                }
            },
            menuItems: [
                { label: 'My Favorites', action: 'showMyFavorites' },
                { label: 'Search Artists', action: 'showSearchArtists' }
            ]
        }

        this.setState(state);
        API.setSession(true, userdata.auth_token);
        localStorage.setItem('session', JSON.stringify(state.session))

    }

    setLoggedOut() {
        console.log('setLoggedOut')
        let state = {
            session: {
                loggedIn: false,
                userData: {
                }
            },
            menuItems: []
        }

        this.setState(state);
        API.setSession(false);
        localStorage.setItem('session', JSON.stringify(state.session))

    }

    render() {

        return (
            <div>
                <Header appState={this.state} doLogIn={this.doLogIn.bind(this)} doLogOut={this.doLogOut.bind(this)} />
                <MainSection appState={this.state} />
            </div>
        )

    }

}

export default App;