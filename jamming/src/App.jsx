import { useState } from 'react';
import './App.css'
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import SpotifyAPI from './components/SpotifyAPI/SpotifyAPI';

function App() {
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [tracks, setTracks] = useState([
    { id: 1, name: 'Song A', artist: 'Artist A', album: 'Album A', uri: 'spotify:track:1'},
    { id: 2, name: 'Song B', artist: 'Artist B', album: 'Album B', uri: 'spotify:track:2'},
    { id: 3, name: 'Song C', artist: 'Artist C', album: 'Album C', uri: 'spotify:track:3'}
  ]);

  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.find(t => t.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  const removeTrackFromPlaylist = (track) =>  {
    setPlaylistTracks(playlistTracks.filter( t => t.id!== track.id));
  }

  const updateTracks = (newTracks) => {
    setTracks(newTracks);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackURIS = playlistTracks.map(track => track.uri)
    
    SpotifyAPI.savePlaylist(playlistName, trackURIS)
      .then((message) => {
      console.log(message); // Log success message
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

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

        <button onClick={savePlaylist}>Save to Spotify</button>
      </div>
    );
}
export default App;
