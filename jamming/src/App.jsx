import { useState } from 'react';
import './App.css'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {

  const [tracks, setTracks] = useState([
    { id: 1, name: 'Song A', artist: 'Artist A', album: 'Album A'},
    { id: 2, name: 'Song B', artist: 'Artist B', album: 'Album B'},
    { id: 3, name: 'Song C', artist: 'Artist C', album: 'Album C'}
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) =>  {
    setPlaylistTracks(playlistTracks.filter( t => t.id!== track.id));
  }

  const updateTracks= (newTracks) => {
    setTracks(newTracks);
  }

  const updatePlaylistName= (name) => {
    setPlaylistName(name);
  }

    return (
      <div>
        <h1> Jamming, Kanban Project by Codecademy </h1>

        <SearchResults 
        tracks={tracks} 
        onAdd= {addTrackToPlaylist} 
        />

        <Playlist 
        name= {playlistName}
        tracks= {playlistTracks}
        onRemove= {removeTrackFromPlaylist}
        onNameChange={updatePlaylistName}
        onChange={updateTracks}
        />

      </div>
    )
}
export default App;
