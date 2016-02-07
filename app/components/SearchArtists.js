import React from 'react';
import API from '../lib/api'
import ArtistItem from '../components/ArtistItem'
import { Input } from 'react-bootstrap';

class SearchArtists extends React.Component {

    constructor() {

        super()

        this.state = {
            searchArtists: [],
            timeout: null
        }

    }

    componentDidMount() {

    }

    handleChange(event) {

        let value = event.target.value.replace(' ', '+')
        let that = this

        if (!!value) {

            if (!!this.state.timeout) {
                clearTimeout(this.state.timeout);
            }

            this.state.timeout = setTimeout(function() {

                API.get('/artist/' + value).then(function(response) {
                    that.setState({
                        searchArtists: response
                    })
                });

            }, 500);

            /* */

        } else {

            that.setState({
                searchArtists: [],
                timeout: null
            })

        }
    }

    render() {

        let content;

        if (this.state.searchArtists.length > 0) {
            content = (
                <ul className='artist-list'>
                    {
                        this.state.searchArtists.map(function(artist, n) {
                            return (
                                <ArtistItem key={n} artist={artist} />
                            )
                        })
                    }
                </ul>
            )
        } else {
            content = (
                <p>No results found!</p>
            )
        }

        return (
            <div>
                <h1>Find your artists!</h1>
                <hr />
                <Input type='text' placeholder='Search your artists!' onChange={this.handleChange.bind(this)} />
                {content}
            </div>
        )
    }

}

export default SearchArtists;