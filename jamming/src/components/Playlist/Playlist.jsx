/* eslint-disable react/prop-types */
import { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist ({ name, tracks, onRemove, onNameChange }) {
    const [newName, setNewName] = useState(name);

    const handleNameChange= (event) => {
        setNewName(event.target.value);
        onNameChange(event.target.value);
    };
    
    return (
    <div>
        <h2>
            <label> Playlist Name: </label>
            <input 
            type= "text"
            value= {newName}
            onChange= {handleNameChange}
            />
        </h2>

        <Tracklist 
        tracks={tracks}
        onRemove= {onRemove}
        />
    </div>
    )
}

export default Playlist;