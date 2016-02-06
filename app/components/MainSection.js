import React from 'react';
import Welcome from './Welcome';
import SearchArtists from './SearchArtists';
import FavoritesList from './FavoritesList';
import { Grid, Row, Col } from 'react-bootstrap';

class MainSection extends React.Component {


    componentDidMount() {
        console.log('MainSection', this.props)
    }

    render() {

        let content = <Welcome appState={this.props.appState} />;

        return (
            <Grid>
                <Row>
                    <Col>
                        {content}
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default MainSection;