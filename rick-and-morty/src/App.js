import React from 'react';
import './App.css';
import './lib/api';
import api from './lib/api';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      modalActivo : false,
      personajes :[],
      PSeleccionado:{}
    }
  }

  componentDidMount(){
    api.getAllCharacters()
    .then(results=>{
      this.setState({
        personajes:results
      })
    })
    .catch(e=>console.error(e))
  }

  activarModal(id){
      api.getOneCharacterById(id)
      .then(p=>{
        this.setState({
          modalActivo:true,
          pSeleccionado:p
        }) 
      })
      .catch(e=>console.error(e))
  }
  desactivarModal(){
    this.setState({
      modalActivo:false
    }) 
  }
  renderCards(p){
    return(
      <div key={p.id} onClick ={personaje=> this.activarModal(p.id)} className = 'Card'>
      <div className='Card-image'>
        <figure>
        <img src ={p.image} alt="rick and morty"/>
        </figure>
      </div>
      <div className='Card-description'>
        <div className='Card-name'>
          <h3>{p.name}</h3>
        </div>
      </div>
  </div>
    )
  }
  render(){
    
    const {modalActivo,personajes} = this.state
    const cards = personajes.map(p => this.renderCards(p))
    console.log(personajes)
      return (
      <div className="App">
        <div className='App-contenedor'>
          <h1>Hello world</h1>
          <div className='Cards-container'>
            {cards}
            </div>
            {modalActivo ? (<div className='Modal' onClick ={e=>this.desactivarModal()}>
              <div className='Card-detalle'>
              <div className='Card-image'>
        <figure>
        <img src ={this.state.pSeleccionado.image} alt="rick and morty"/>
        </figure>
      </div>
      <div className = 'Card-detalle-description'>
        <div className ='description'>
      <h3>{this.state.pSeleccionado.name}</h3>
          <div className='caracteristicas'>
            <p>Status:</p>
            <p className = 'caracteristicas-valor'>
            {this.state.pSeleccionado.status}
            </p>
          </div>
          <div className='caracteristicas'>
            <p>Especie:</p>
            <p className = 'caracteristicas-valor'>
            {this.state.pSeleccionado.species}
            </p>
          </div>
          <div className='caracteristicas'>
            <p>Genero:</p>
            <p className = 'caracteristicas-valor'>
            {this.state.pSeleccionado.gender}
            </p>
          </div>
          <div className='caracteristicas'>
            <p>Origen:</p>
            <p className = 'caracteristicas-valor'>
            {this.state.pSeleccionado.origin.name}
            </p>
          </div>

        </div>
      </div>
              </div>
            </div>):null}
        </div>
      </div>
    );
  }
}
export default App;
