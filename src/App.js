import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    comic: []
  }
  

  async componentDidMount (){
    const res = await fetch('https://gateway.marvel.com:443/v1/public/comics?apikey=1505e799a8ca64cdcca6038e57ea8c66')
    const json = await res.json()
    this.setState({comic: json})
    console.log(json)
  }


  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
