import React from 'react';
import ArtistItem from '../components/ArtistItem';

class ArtistList extends React.Component {

    render() {

        return (
            <ul className='artist-list'>
                {
                    this.props.artistList.map((artist, n) => {
                        artist.favorite = !!this.props.isFavoriteList;
                        return (
                            <ArtistItem key={n} artist={artist} />
                        );
                    })
                }
            </ul>
        );

    }

}

export default ArtistList;