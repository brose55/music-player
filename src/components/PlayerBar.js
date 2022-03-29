import React, { useState } from 'react';
import '../style/PlayerBar.scss';

const PlayerBar = ({ currentTime, duration, handleTimeChange, formatTime, handlePrevClick, handleSongClick, handleNextClick, isPlaying, volume, handleVolumeChange }) => {

    const [isHovered, setHovered] = useState(false);
    return (
      <div className="pb">
        <div className='left-side'>
          <div id="time-control" className="stack">
            <input
              type="range"
              className="seek-bar time-bar"
              value={(currentTime / duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={handleTimeChange}
            />
          </div>
          <div className="under">
            <div id='time' className='flex'>
              <div className="current-time">{formatTime(currentTime)}</div>
              <span> | </span>
              <div className="total-time">{formatTime(duration)}</div>
            </div>
            <div id="buttons">
              <button id="previous" onClick={handlePrevClick}>
                <ion-icon name="skip-backward"></ion-icon>
              </button>
              <button id="play-pause" onClick={handleSongClick}>
                {
                  isPlaying ?
                    <ion-icon name="pause"></ion-icon> :
                    <ion-icon name="play"></ion-icon>
                }
              </button>
              <button id="next" onClick={handleNextClick}>
                <ion-icon name="skip-forward"></ion-icon>
              </button>
            </div>
            <div
              id="volume-control"
              className="right-side"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
              <input
                type="range"
                className="seek-bar volume-bar"
                value={volume}
                max="1"
                min="0"
                step="0.01"
                onChange={handleVolumeChange}
                style={isHovered ? {'display':'flex'} : {'display':'none'}}
              />
              <div className="volume flex">
                <ion-icon name="volume-high"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PlayerBar;
