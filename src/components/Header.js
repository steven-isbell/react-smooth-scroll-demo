import React from 'react';

class Header extends React.Component {
  handleScrollIntoView = val => {
    const el = document.getElementById(val);
    el.scrollIntoView({ behavior: 'smooth' });
  };
  render() {
    const renderLinks = this.props.numberOfSections.map((v, i) => (
      <div
        key={i}
        style={{
          border:
            this.props.section === `section${i + 1}` ? '1px solid black' : '',
          padding: '10px'
        }}
        onClick={() => this.handleScrollIntoView(`section${i + 1}`)}
      >
        {`Section${i + 1}`}
      </div>
    ));
    return (
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          position: 'sticky',
          top: '0',
          width: '100vw',
          background: 'orange',
          height: '5vh'
        }}
      >
        {renderLinks}
      </header>
    );
  }
}

export default Header;
