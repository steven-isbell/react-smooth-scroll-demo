import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import './App.css';

class App extends Component {
  handleScrollEnter = val => {
    const el = this[val];
    el.style.border = '1px solid black';
  };
  handleScrollLeave = val => {
    const el = this[val];
    el.style.border = '';
  };
  handleScrollIntoView = val => {
    const el = document.getElementById(val);
    el.scrollIntoView({ behavior: 'smooth' });
  };
  render() {
    return (
      <div className="App">
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

        <section id="section1">
          <Waypoint
            onEnter={() => this.handleScrollEnter('section1')}
            onLeave={() => this.handleScrollLeave('section1')}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section2">
          <Waypoint
            onEnter={() => this.handleScrollEnter('section2')}
            onLeave={() => this.handleScrollLeave('section2')}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section3">
          <Waypoint
            onEnter={() => this.handleScrollEnter('section3')}
            onLeave={() => this.handleScrollLeave('section3')}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section4">
          <Waypoint
            onEnter={() => this.handleScrollEnter('section4')}
            onLeave={() => this.handleScrollLeave('section4')}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
      </div>
    );
  }
}

export default App;
