import * as react from 'react';
import { ReactComponent as NetflixTextLogo } from '../assets/logo/Netflix_2015_logo.svg';
import SVGLink from './SVGLink';

/** Header Nav Bar */
function NavBar() {
  return (
    <nav className="header-nav">
      <SVGLink href="/" className="header-nav__logo">
        <NetflixTextLogo className="netflix-text-logo" />
      </SVGLink>
    </nav>
  );
}

export default NavBar;
