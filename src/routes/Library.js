import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../style/Library.scss';

const Library = ({setRoute}) => {
  const [albums] = useState(albumData)
  return (
    <div className="library">
      {
        albums.map( (album, i) =>
          <Link to={`/album/${album.slug}`} key={album.title + i} onClick={() => setRoute('album')}>
            <img className="album-thumbnail" src={album.albumCover} alt={album.title} />
            <div className="album-description">
              <p>{album.artist} -</p>
              <p>{album.title}</p>
              <p>{album.songs.length} songs</p>
            </div>
          </Link>
        )
      }
    </div>
  );
}

export default Library;
