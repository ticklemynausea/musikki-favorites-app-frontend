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
            menuItems: [],
            currentPage: 'welcome'
        };

    }

    componentDidMount() {

        let storedSession = localStorage.getItem('session');

        if (storedSession !== null) {

            let session = JSON.parse(storedSession);
            console.log('cdm', session)

            if (session.loggedIn) {
                console.log('setting loggedIn from stored session')
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
            console.log('api logout response')
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
                { label: 'My Favorites', action: 'favorites' },
                { label: 'Search Artists', action: 'search' }
            ],
            currentPage: 'welcome'
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
            menuItems: [],
            currentPage: 'welcome'
        }

        API.setSession(false);
        localStorage.setItem('session', JSON.stringify(state.session))
        this.setState(state);

    }

    setNavigation(target) {
        console.log('setNav', target)
        let state = this.state;
        state.currentPage = target;
        this.setState(state);
    }

    render() {

        return (
            <div>
                <Header appState={this.state} doLogIn={this.doLogIn.bind(this)} doLogOut={this.doLogOut.bind(this)} doNav={this.setNavigation.bind(this)} />
                <MainSection appState={this.state} />
            </div>
        )

    }

}

export default App;