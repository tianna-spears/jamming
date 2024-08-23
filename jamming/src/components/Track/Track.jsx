/* eslint-disable react/prop-types */

function Track ( {track, onAdd, onRemove} ) {
    return (
        <div>
            <p> {track.name} by {track.artist} from {track.album}</p>
            <button onClick={() => onAdd(track)}> Add + </button>
                {onRemove && <button onClick={() => onRemove(track)}> Remove </button>}
        </div>
    );
}

export default Track;