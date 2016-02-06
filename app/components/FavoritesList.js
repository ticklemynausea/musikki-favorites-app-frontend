import React from 'react';
import API from '../lib/api'
import ArtistItem from '../components/ArtistItem'
import { Input } from 'react-bootstrap';

class FavoritesList extends React.Component {

    constructor() {

        super()

        this.state = {
            favoriteArtists: []
        }


    }

    componentDidMount() {
        let that = this
        API.get('/favorite').then(function(response) {
            that.setState({
                favoriteArtists: response
            })
        });
    }

    handleChange(event) {

    }

    render() {

        let content;

        if (this.state.favoriteArtists.length > 0) {
            content = (
                <ul className='artist-list'>
                    {
                        this.state.favoriteArtists.map(function(artist, n) {
                            return (
                                <ArtistItem artist={artist} />
                            )
                        })
                    }
                </ul>
            )
        } else {
            content = (
                <h2>No favorite artists were picked!</h2>
            )
        }

        return (
            <div>
                <h1>My Favorites</h1>
                {content}
            </div>
        )
    }

}

export default FavoritesList;