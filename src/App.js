import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Section from './components/Section';

class App extends Component {
  state = {
    section: '',
    numberOfSections: [1, 2, 3, 4]
  };
  handleSection = section => {
    this.setState(section);
  };
  render() {
    const renderSections = this.state.numberOfSections.map((v, i) => (
      <Section key={i} count={v} handleSection={this.handleSection} />
    ));
    return (
      <div className="App">
        <Header
          section={this.state.section}
          numberOfSections={this.state.numberOfSections}
        />
        {renderSections}
      </div>
    );
  }
}

export default App;
