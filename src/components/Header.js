import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../style/heart-beat.png';
import '../style/Header.scss';

const Header = ({route, setRoute}) => {
  return (
    <header className="app-header flex">

      <section className='logo-title flex'>
        <Link to="/">
          <img width='50' src={logo} alt="logo" className="logo"/>
        </Link>
        <Link to='/'>
          <h3 className="hero-title">React Jams</h3>
        </Link>
      </section>

      <h1 className='hero-slogan'>Choose your own music!</h1>

      <nav>
        {/* Conditionally renders the navbar based off the route hook in App.js. Beware of the chained ternary operator! */
          route === 'album'
            ? (
              <div className='flex nav-bar'>
                <Link to='/' className='nav-item' onClick={() => setRoute('landing')}>
                  Home
                </Link>
                <Link to="/library" className='nav-item' onClick={() => setRoute('library')}>
                  Library
                </Link>
              </div>
            )
            : (route === 'landing'
              ? <Link to='/library' className='nav-item' onClick={() => setRoute('library')}>
                Library
                </Link>
              : <Link to='/' className='nav-item' onClick={() => setRoute('landing')}>
                Home
                </Link>
            )
        }
      </nav>

    </header>
  );
}

export default Header;
