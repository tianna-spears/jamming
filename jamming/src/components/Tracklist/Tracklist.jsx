/* eslint-disable react/prop-types */
import Track from '../Track/Track.jsx';

function Tracklist ( {tracks} ) {
    return (
        <div>
            {tracks.map(track => (
             <Track
             key= {track.id}
             name= {track.name}
             artist= {track.artist}
             album= {track.album}
             />
            ))}
        </div>
    );
}

export default Tracklist;