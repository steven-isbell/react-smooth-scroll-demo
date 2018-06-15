import React from 'react';

class Header extends React.Component {
  handleScrollIntoView = val => {
    const el = document.getElementById(val);
    el.scrollIntoView({ behavior: 'smooth' });
  };
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
          style={{
            border: this.props.section === 'section1' ? '1px solid black' : ''
          }}
          onClick={() => this.handleScrollIntoView('section1')}
        >
          Section1
        </div>
        <div
          style={{
            border: this.props.section === 'section2' ? '1px solid black' : ''
          }}
          onClick={() => this.handleScrollIntoView('section2')}
        >
          Section2
        </div>
        <div
          style={{
            border: this.props.section === 'section3' ? '1px solid black' : ''
          }}
          onClick={() => this.handleScrollIntoView('section3')}
        >
          Section3
        </div>
        <div
          style={{
            border: this.props.section === 'section4' ? '1px solid black' : ''
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
