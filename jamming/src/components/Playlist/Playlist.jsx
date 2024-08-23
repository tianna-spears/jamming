/* eslint-disable react/prop-types */
import { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist ({ name, tracks, onRemove, onNameChange }) {
    const [newName, setNewName] = useState(name);
    const [edit, setEdit] = useState(false);
    const [showEditButton, setShowEditButton] = useState(false);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleEdit = () => {
        setEdit(true);
        setShowEditButton(true);
    }

    const handleEditEvent = (event) => {
        if (event.key === 'Enter') {
            setEdit(false);
            setShowEditButton(false);
            onNameChange(newName);
        }
    }
    
    return (
    <div>
        <h2>
        {showEditButton ? (
            <label> Playlist Name:
            <input 
            type= "text"
            value= {newName}
            onChange= {handleNameChange}
            onKeyDown= {handleEditEvent}
            autoFocus
            />
            </label>
        ) : (
        <span onClick= {handleEdit}>{name}</span>
        )}
        </h2>
        {!showEditButton && (
            <button onClick={handleEdit}> Edit Playlist Name</button>
        )

        }

        <Tracklist 
        tracks={tracks}
        onRemove= {onRemove}
        />
    </div>
    
    )}

export default Playlist;