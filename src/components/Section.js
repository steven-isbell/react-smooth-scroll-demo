import React from 'react';
import Waypoint from 'react-waypoint';

const Section = ({ count, handleSection }) => (
  <section
    id={`section${count}`}
    style={{
      height: '100vh',
      width: '100vw',
      background: count % 2 === 0 ? 'salmon' : 'rebeccapurple'
    }}
  >
    <Waypoint
      onEnter={() => handleSection({ section: `section${count}` })}
      bottomOffset="20px"
      topOffset="-20px"
    />
  </section>
);

export default Section;
