import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          position: 'sticky',
          top: '0',
          width: '100vw',
          background: 'orange'
        }}
      >
        <div
          ref={sec1 => {
            this.section1 = sec1;
          }}
          onClick={() => this.handleScrollIntoView('section1')}
        >
          Section1
        </div>
        <div
          ref={sec2 => {
            this.section2 = sec2;
          }}
          onClick={() => this.handleScrollIntoView('section2')}
        >
          Section2
        </div>
        <div
          ref={sec3 => {
            this.section3 = sec3;
          }}
          onClick={() => this.handleScrollIntoView('section3')}
        >
          Section3
        </div>
        <div
          ref={sec4 => {
            this.section4 = sec4;
          }}
          onClick={() => this.handleScrollIntoView('section4')}
        >
          Section4
        </div>
      </header>
    );
  }
}

export default Header;
