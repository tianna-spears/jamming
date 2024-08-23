/* eslint-disable react/prop-types */
import Tracklist from '../Tracklist/Tracklist';

function SearchResults( {tracks} ) {
    return (
        <div>
            <h2> Search Results </h2>
            <Tracklist tracks={tracks} />
        </div>
    );
}

export default SearchResults;