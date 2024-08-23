/* eslint-disable react/prop-types */
import Track from '../Track/Track.jsx';

function Tracklist ( {tracks, onAdd} ) {
    return (
        <div>
            {tracks.map(track => (
             <Track
             key= {track.id}
             track= {track}
             artist= {track.artist}
             album= {track.album}
             onAdd={onAdd}
             />
            ))}
        </div>
    );
}

export default Tracklist;