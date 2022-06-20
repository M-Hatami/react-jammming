import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

class Playlist extends Component {
  handleNameChange = (e) => {
    this.props.onNameChange(e.target.value);
  };
  render() {
    return (
      <div className="Playlist">
        <input
          defaultValue={"فهرست پخش جدید"}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.props.onSave}>
          ذخیره در حساب خود
        </button>
      </div>
    );
  }
}

export default Playlist;
