/* eslint-disable react/prop-types */

function Track ( {track, onAdd} ) {
    return (
     <div>
        <p> {track.name} by {track.artist} from {track.album}</p>
     <button onClick={() => onAdd(track)}> Add </button>
     </div>
    )
}

export default Track;