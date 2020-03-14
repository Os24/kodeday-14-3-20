import React from 'react';
import './App.css';

class App extends React.Component {
  
  renderCards(){
    return(
      <div className = 'Card'>
      <div className='Card-image'>
        <figure>
        <img src ={'https://rickandmortyapi.com/api/character/avatar/25.jpeg'} alt="rick and morty"/>
        </figure>
      </div>
      <div className='Card-description'>
        <div className='Card-name'>
          <h3>Rick</h3>
        </div>
      </div>
  </div>
    )
  }
  render(){

    const fakeData = [0,1,2,3,4,5,6,7]

    const cards = fakeData.map(e => this.renderCards())
    console.log(cards,"cards")
      return (
      <div className="App">
        <div className='App-contenedor'>
          <h1>Hello world</h1>
          <div className='Cards-container'>
            {cards}
          </div>
        </div>
      </div>
    );
  }
  

}

export default App;
