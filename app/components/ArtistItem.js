import React from 'react';
import { NavDropdown, MenuItem, ButtonInput, Image, Grid, Row, Col } from 'react-bootstrap';

class ArtistItem extends React.Component {

    constructor() {
        super()


    }

    componentDidMount() {

    }


    render() {

        return (
            <li>
                <Image src={this.props.artist.image_url} thumbnail />
                <h2>{this.props.artist.name}</h2>
            </li>
        )
    }

}

export default ArtistItem;