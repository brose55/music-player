import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Landing.scss';

const Landing = () => (
      <div className="landing">
        <div className="selling-points flex">
          <section className='point-group first grid'>
            <Link to="/library" className="point-icon"><ion-icon name="musical-notes"></ion-icon></Link>
            <div className ="point top">
              <h2 className="point-title">Choose your music</h2>
              <p className="point-description">The world is full of music.</p>
              <p className="point-description">Listen to only what <em>you</em> choose</p>
            </div>
          </section>
          <section className='point-group grid'>
            <Link to="/library" className="point-icon"><ion-icon name="microphone"></ion-icon></Link>
            <div className ="point middle">
              <h2 className="point-title">Unlimitted ad-free</h2>
              <h2 className="point-title large">streaming</h2>
              <p className="point-description"><b>No</b> arbitrary limits.</p>
              <p className="point-description"><b>No</b> distractions.</p>
            </div>
          </section>
          <section className='point-group grid'>
            <Link to="/library" className="point-icon"><ion-icon name="headset"></ion-icon></Link>
            <div className ="point bottom">
              <h2 className="point-title">Mobile enabled</h2>
              <p className="point-description">Listen to your music on the go.</p>
              <p className="point-description">Available on all mobile devices!</p>
            </div>
          </section>
        </div>
      </div>
);


export default Landing;
