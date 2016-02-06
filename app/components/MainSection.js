import React from 'react';
import Welcome from './Welcome';
import SearchArtists from './SearchArtists';
import FavoritesList from './FavoritesList';
import { Grid, Row, Col } from 'react-bootstrap';

class MainSection extends React.Component {


    componentDidMount() {
        console.log('MainSection', this.props)
    }

    doLetsGo() {
        this.props.doLetsGo()
    }

    render() {

        let content;
        switch (this.props.appState.currentPage) {

            case 'welcome':
                content = <Welcome appState={this.props.appState} doLetsGo={this.doLetsGo.bind(this)} />;
                break;

            case 'favorites':
                content = <FavoritesList appState={this.props.appState} />;
                break;

            case 'search':
                content = <SearchArtists appState={this.props.appState} />;
                break

            default:
                break;
        }

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