import React from 'react';
import API from '../lib/API';
import { NavDropdown, MenuItem, ButtonInput, Image, Glyphicon } from 'react-bootstrap';

class ArtistItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            favorite: this.props.artist.favorite,
            loading: false
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            favorite: nextProps.artist.favorite,
            loading: false
        });
    }

    addFavorite() {

        this.state.loading = true;
        this.setState(this.state);

        API.post('/favorite/add/' + this.props.artist.id).then((response) => {

            this.state.loading = false;

            if (response.status === 'ok') {
                this.state.favorite = true;
                this.setState(this.state);
            }

        });

    }

    removeFavorite() {

        this.state.loading = true;
        this.setState(this.state);

        API.post('/favorite/remove/' + this.props.artist.id).then((response) => {

            this.state.loading = false;

            if (response.status === 'ok') {
                this.state.favorite = false;
                this.setState(this.state);
            }

        });

    }

    render() {

        let glyph;
        let action;

        if (this.state.loading) {
            glyph = 'refresh animate-rotate';
            action = null;
        } else if (this.state.favorite) {
            glyph = 'star';
            action = this.removeFavorite.bind(this);
        } else {
            glyph = 'star-empty';
            action = this.addFavorite.bind(this);
        }

        let favoriteButton = (
            <div onClick={action} className={ 'favorite-button ' + (!action ? 'loading' : '') }>
                <Glyphicon glyph={glyph} />
            </div>
        );

        return (
            <li>
                <Image src={this.props.artist.image_url} thumbnail title={this.props.artist.id} />
                <h2>{this.props.artist.name}</h2>
                {favoriteButton}
            </li>
        );
    }

}

export default ArtistItem;