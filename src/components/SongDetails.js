import React from 'react';
import { connect } from 'react-redux';

class SongDetail extends React.Component {
  render() {
    const { selectedSong } = this.props;
    if (!selectedSong) {
      return null;
    }
    return (
      <div className="selected-song">
        <div className="details">
          <b>Selected Songs Details</b>
        </div>
        <br />
        <div className="selected-song-title">
          {selectedSong.title} {selectedSong.duration}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSong: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail)
