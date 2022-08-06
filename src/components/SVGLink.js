import * as react from 'react';

/** SVG Link */
function SVGLink({ href = '/', className = '', children }) {
  return (
    <a href={href} className={'svg-link ' + className}>
      {children}
    </a>
  );
}

export default SVGLink;
