import React from 'react';
import API from '../lib/API';
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
            failedLogin: false,
            currentPage: 'welcome'
        };

    }

    componentDidMount() {

        let storedSession = localStorage.getItem('session');

        if (storedSession !== null) {

            let session = JSON.parse(storedSession);

            if (session.loggedIn) {
                this.setLoggedIn(session.userData);
            } else {
                this.setLoggedOut();
            }

        }

    }

    doLogIn(formData) {

        API.post('/user/login', {
            username: formData.username,
            password: formData.password
        }).then((response) => {

            if (response.status === 'ok') {
               this.setLoggedIn(response);
            }

        }, (error) => {

            if (error.response.status === 403) {

                this.state.failedLogin = true;
                this.setState(this.state);

                if (!!this.state.timeout) {
                    clearTimeout(this.state.timeout);
                }

                this.state.timeout = setTimeout(() => {
                    this.state.failedLogin = false;
                    this.setState(this.state);
                }, 1000);
            }

        });


    }

    doLogOut() {

        API.post('/user/logout', {}).then((response) => {

            if (response.status === 'ok') {
                this.setLoggedOut();
            }

        });


    }

    setLoggedIn(userdata) {

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
            failedLogin: false,
            currentPage: 'welcome'
        };

        this.setState(state);
        API.setSession(true, userdata.auth_token);
        localStorage.setItem('session', JSON.stringify(state.session));

    }

    setLoggedOut() {

        let state = {
            session: {
                loggedIn: false,
                userData: {
                }
            },
            menuItems: [],
            failedLogin: false,
            currentPage: 'welcome'
        };

        this.setState(state);
        API.setSession(false);
        localStorage.setItem('session', JSON.stringify(state.session));

    }

    setNavigation(target) {

        this.state.currentPage = target;
        this.setState(this.state);
    }

    render() {

        return (
            <div>
                <Header appState={this.state} doLogIn={this.doLogIn.bind(this)} doLogOut={this.doLogOut.bind(this)} doNav={this.setNavigation.bind(this)} />
                <MainSection appState={this.state} doLetsGo={this.setNavigation.bind(this, 'search')} />
            </div>
        );

    }

}

export default App;