const SpotifyAPI = {
    savePlaylist(playlistName, trackURIS) {
     if (!playlistName || !trackURIS.length)
        return 
    console.log(`Saving playlist: ${playlistName}`);
    console.log(`Tracks URIs: ${trackURIS}`);
    
    // Simulate a successful save operation
    return new Promise((resolve) => {
      setTimeout(() => resolve('Playlist saved successfully!'), 1000);
    });
  }
};

export default SpotifyAPI;



// const mockSpotifyTracks = [
//     { uri: 'spotify:track:2qPXmanaJuzAtQuiGNFhzL'},
//     { uri: 'spotify:track:2QpUWi6VSNOt2WyH5FIeLD'},
//     { uri: 'spotify:track:6kLZ1DzSxBkNVvdQm6CX0N'}
//   ];