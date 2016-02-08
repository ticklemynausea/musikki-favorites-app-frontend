import React from 'react';
import API from '../lib/API';
import ArtistList from '../components/ArtistList';
import { Input } from 'react-bootstrap';

class FavoritesList extends React.Component {

    constructor() {

        super();

        this.state = {
            favoriteArtists: []
        };


    }

    componentDidMount() {

        API.get('/favorites').then((response) => {
            this.setState({
                favoriteArtists: response
            });
        });

    }

    handleChange(event) {

    }

    render() {

        let content = (this.state.favoriteArtists.length > 0) ?
            (<ArtistList artistList={this.state.favoriteArtists} isFavoriteList />) :
            (<p>No favorite artists were picked!</p>);

        return (
            <div>
                <h1>My Favorites</h1>
                <hr />
                {content}
            </div>
        );
    }

}

export default FavoritesList;