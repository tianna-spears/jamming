import { useState } from 'react';
import './App.css'
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  const [tracks, setTracks] = useState([
    { id: 1, name: 'Song A', artist: 'Artist A', album: 'Album A'},
    { id: 2, name: 'Song B', artist: 'Artist B', album: 'Album B'},
    { id: 3, name: 'Song C', artist: 'Artist C', album: 'Album C'}
  ]);

    return (
      <div>
        <h1> Jamming, Kanban Project by Codecademy </h1>
        <SearchResults tracks={tracks} />
      </div>
    )
}
export default App;
