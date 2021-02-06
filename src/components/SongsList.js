import React from 'react';
import { selectSong } from '../actions';
import { connect } from 'react-redux';

import '../styles/songslist.css';

class SongsList extends React.Component {

  renderList () {
    const { songs, selectSong } = this.props;
    return songs.map(song => {
      return (
       <div className="song" key={song.title}>
         <div className="song-title">
          {song.title}
         </div>
         <div className="select-button" onClick={() => selectSong(song)}>
           Select
         </div>
       </div> 
      )
    })
  }
  
  render() {
    console.log(this.props.songs);
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { selectSong })(SongsList);