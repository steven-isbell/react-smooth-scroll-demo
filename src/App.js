import React, { Component } from 'react';
import Header from './components/Header';
import Waypoint from 'react-waypoint';
import './App.css';

class App extends Component {
  state = {
    section: ''
  };
  render() {
    return (
      <div className="App">
        <Header section={this.state.section} />
        <section id="section1">
          <Waypoint
            onEnter={() => this.setState({ section: 'section1' })}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section2">
          <Waypoint
            onEnter={() => this.setState({ section: 'section2' })}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section3">
          <Waypoint
            onEnter={() => this.setState({ section: 'section3' })}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
        <section id="section4">
          <Waypoint
            onEnter={() => this.setState({ section: 'section4' })}
            bottomOffset="20px"
            topOffset="-20px"
          />
        </section>
      </div>
    );
  }
}

export default App;
