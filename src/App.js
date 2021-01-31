import React from 'react';
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.jsx';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {

    }
  }

  render(){
    return(
      <div className="App">
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default App;