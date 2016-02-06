import React from 'react';
import API from '../lib/api'
import { Input } from 'react-bootstrap';

class SearchArtists extends React.Component {

    constructor() {

        super()

    }

    componentDidMount() {

    }

    handleChange(event) {
        let value = event.target.value
        API.get('/artist/' + value).then(function(response) {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                <h1>Search Artists</h1>
                <Input type='text' placeholder='Search your artists!' onChange={this.handleChange.bind(this)} />
                <ul>
                </ul>
            </div>
        )
    }

}

export default SearchArtists;