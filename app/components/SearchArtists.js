import React from 'react';
import API from '../lib/API';
import ArtistList from '../components/ArtistList';
import { Input } from 'react-bootstrap';

class SearchArtists extends React.Component {

    constructor() {

        super();

        this.state = {
            searchArtists: [],
            timeout: null
        };

    }

    handleChange(event) {

        let value = event.target.value.replace(' ', '+');


        if (!!this.state.timeout) {
            clearTimeout(this.state.timeout);
        }

        this.state.timeout = setTimeout(() => {


            if (!!value) {

                API.get('/artists/' + value).then((response) => {
                    this.setState({
                        searchArtists: response
                    });
                });

            } else {

                this.setState({
                    searchArtists: [],
                    timeout: null
                });

            }

        }, 500);


    }

    render() {

        let content = (this.state.searchArtists.length > 0) ?
            (<ArtistList artistList={this.state.searchArtists} />) :
            (<p>No results found!</p>);

        return (
            <div>
                <h1>Find your artists!</h1>
                <hr />
                <Input bsSize='large' type='text' placeholder='Search your artists!' onChange={this.handleChange.bind(this)} />
                {content}
            </div>
        );
    }

}

export default SearchArtists;