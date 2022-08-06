import * as react from 'react';
import { ReactComponent as NetflixTextLogo } from '../assets/icon/Netflix_2015_logo.svg';
import { ReactComponent as SearchIcon } from '../assets/icon/search-btn.svg';
import SVGLink from './SVGLink';
import SVGButton from './SVGButton';

/** Header Nav Bar */
function NavBar() {
  return (
    <nav className="header-nav">
      <SVGLink href="/browse" className="header-nav__logo">
        <NetflixTextLogo className="netflix-text-logo" />
      </SVGLink>
      <ul className="header-nav__menu c-white">
        <a href="/browse">Home</a>
        <a href="/tv">TV Shows</a>
        <a href="/movies">Movies</a>
        <a href="/latest">New & Popular</a>
        <a href="/my-list">My List</a>
        <a href="/original-audio">Audio & Subtitles</a>
      </ul>
      <SVGButton>
        <SearchIcon />
      </SVGButton>
    </nav>
  );
}

export default NavBar;
