import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      // [
      //   { name: "seda", artist: "are", album: "eee", id: 1 },
      //   { name: "tasvir", artist: "naa", album: "ooo", id: 2 },
      //   { name: "harekat", artist: "chi", album: "hmm", id: 3 },
      // ]
      playlistName: "user's play list",
      playlistTracks: [],
      // [
      //   { name: "pTrack1", artist: "pArtist1", album: "pAlbum1", id: 4 },
      //   { name: "pTrack2", artist: "pArtist2", album: "pAlbum2", id: 5 },
      //   { name: "pTrack3", artist: "pArtist3", album: "pAlbum3", id: 6 },
      // ]
    };
  }

  addTrack = (track) => {
    let tracks = this.state.playlistTracks;
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  };

  removeTrack = (track) => {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);
    this.setState({ playlistTracks: tracks });
  };

  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlayList(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  };

  search = (searchTerm) => {
    Spotify.search(searchTerm).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  };

  render() {
    return (
      <div>
        <h1>
          ع<span className="highlight">ــلــ</span>م{" "}
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              SearchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              Playlist={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
