import * as react from 'react';

/** SVG Button */
function SVGLink({ className = '', children, onClick }) {
  return (
    <button onClick={onClick} className={'svg-btn ' + className}>
      {children}
    </button>
  );
}

export default SVGLink;
