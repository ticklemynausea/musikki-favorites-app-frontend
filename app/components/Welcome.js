import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Welcome extends React.Component {

    componentDidMount() {
        console.log('Welcome didMount', this.props)
    }

    componentDidUpdate() {
        console.log('Welcome didUpdate', this.props)
    }

    render() {

        let title;

        if (this.props.appState.session.loggedIn) {
            title = (<h1>Olá {this.props.appState.session.userData.username}</h1>);
        } else {
            title = (<h1>My Favorite Artists</h1>);
        }

        return (
            <Jumbotron>
                {title}
                <p>Através desta fantástica demo poderás marcar os teus artistas favoritos!</p>
                <p><Button bsStyle='primary'>Siga!</Button></p>
            </Jumbotron>
        )
    }

}

export default Welcome;