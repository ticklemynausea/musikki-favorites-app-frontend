import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Welcome extends React.Component {

    render() {
        return (
            <Jumbotron>
                <h1>My Favorite Artists</h1>
                <p>Através desta fantástica demo poderás marcar os teus artistas favoritos!</p>
                <p><Button bsStyle='primary'>Siga!</Button></p>
            </Jumbotron>
        )
    }

}

export default Welcome;