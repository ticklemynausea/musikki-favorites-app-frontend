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
                            artist.favorite = true
                            return (
                                <ArtistItem key={n} artist={artist} />
                            )
                        })
                    }
                </ul>
            )
        } else {
            content = (
                <p>No favorite artists were picked!</p>
            )
        }

        return (
            <div>
                <h1>My Favorites</h1>
                <hr />
                {content}
            </div>
        )
    }

}

export default FavoritesList;