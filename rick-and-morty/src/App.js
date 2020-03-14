import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='App-contenedor'>
          <h1>Hello world</h1>
          <div className='Cards-container'>
            <div className = 'Card'>
                <div className='Card-image'>
                  <figure>
                  <img src ={'https://rickandmortyapi.com/api/character/avatar/25.jpeg'}/>
                  </figure>
                </div>
                <div className='Card-description'>
                  <div className='Card-name'>
                    <h3>Rick sabdjksahdsjkahdjksahdkjsahkd</h3>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

}

export default App;
