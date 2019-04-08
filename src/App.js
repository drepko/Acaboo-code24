import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          {/* TopBar */}
        </nav>
        <main>
          <Route exact path="/courses" component={CoursesCountainer} />
          <Route exact path="/about" component={AboutCountainer} />
        </main>
      </div>
    );
  }
}

export default App;
