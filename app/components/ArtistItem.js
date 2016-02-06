import React from 'react';
import API from '../lib/api'
import { NavDropdown, MenuItem, ButtonInput, Image, Glyphicon } from 'react-bootstrap';

class ArtistItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            favorite: this.props.artist.favorite,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ favorite: nextProps.artist.favorite })
    }

    addFavorite() {

        let that = this;

        API.post('/favorite/add/' + this.props.artist.id).then(function(response) {

            if (response.status === 'ok') {
                that.setState({ favorite: true });
            }

        });

    }

    removeFavorite() {

        let that = this;

        API.post('/favorite/remove/' + this.props.artist.id).then(function(response) {

            if (response.status === 'ok') {
                that.setState({ favorite: false });
            }

        });

    }

    render() {

        let action;

        if (this.state.favorite) {
            action = (
                <div onClick={this.removeFavorite.bind(this)}>
                    <Glyphicon glyph='star' />
                </div>
            );
        } else {
            action = (
                <div onClick={this.addFavorite.bind(this)}>
                    <Glyphicon glyph='star-empty' />
                </div>
            );
        }

        return (
            <li>
                <Image src={this.props.artist.image_url} thumbnail title={this.props.artist.id} />
                <h2>{this.props.artist.name}</h2>
                {action}
            </li>
        )
    }

}

export default ArtistItem;