/* eslint-disable react/prop-types */
function Track ( {name, artist, album} ) {
    return (
     <div>
        <p> Track: {name} </p>
        <p> Artist: {artist} </p>
        <p> Album: {album} </p>
     </div>
    )
}

export default Track;