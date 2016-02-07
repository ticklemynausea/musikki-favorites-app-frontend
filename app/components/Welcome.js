import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Welcome extends React.Component {

    componentDidMount() {
        console.log('Welcome didMount', this.props)
    }

    componentDidUpdate() {
        console.log('Welcome didUpdate', this.props)
    }

    doLetsGo() {
        this.props.doLetsGo()
    }

    render() {

        let title;
        let button;

        if (this.props.appState.session.loggedIn) {
            title = (<h1>Hello {this.props.appState.session.userData.username}!</h1>);
            button = (<Button bsStyle='primary' onClick={this.doLetsGo.bind(this)}>Let&apos;s go!</Button>)
        } else {
            title = (<h1>My Favorite Artists</h1>);
            button = null;
        }

        return (
            <Jumbotron>
                {title}
                <p>With this demo you can make a list of your favorite artists!</p>
                <p>{button}</p>
            </Jumbotron>
        )
    }

}

export default Welcome;