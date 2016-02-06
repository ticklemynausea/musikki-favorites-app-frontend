import React from 'react';
import Welcome from './Welcome';
import { Grid, Row, Col } from 'react-bootstrap';

class MainSection extends React.Component {


    componentDidMount() {
        console.log('MainSection props', this.props)
    }

    render() {
        return (
            <Welcome />
        )
    }

}

export default MainSection;