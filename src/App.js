import React,{Component} from 'react';
import Card from './Component/Card';
import Navigation from './Component/Navigation';
import Footer from './Component/Footer';
import './App.css';
import axios from 'axios'; 

class App extends Component{
  state ={
    pokemonObj:[],
    displayButton: false,
    buttonDisplay: ''
  }
  
  displayPokemon = () =>{
    this.setState({
      displayButton: true,
      buttonDisplay: 'none'
    })
  } 
  componentDidMount(){
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon-species';    
    for(let i =1; i<151; i++){
      axios.get('/'+i)
        .then(responce => {
          let x = {};       
          x.id = i;
          x.name = responce.data.name;
          x.img = `https://pokeres.bastionbot.org/images/pokemon/${i}.png`;
          x.color = responce.data.color.name;
          x.growthRate = responce.data.growth_rate.name;        
          
          let y = this.state.pokemonObj;
          y.push(x);
          this.setState({pokemonObj:y});
          
        })
        .catch(error => console.log("This was an ERROR!", error));
    }     
  }    
  render(){
    var height =window.innerHeight -100;
    return (
      <div>
        <Navigation />
        
        {
          this.state.displayButton ?
          <div className='cardContainer' style={{minHeight: height}}>
            {
              this.state.pokemonObj.map(element => {
                return (<Card 
                  img={element.img}
                  name={element.name}
                  color={element.color}
                  growthRate={element.growthRate} 
                  key ={element.id}
                  />)
              })        
            }
          </div>:
          <div className='buttonContainer' style={{minHeight: height}}>
            <button onClick={this.displayPokemon} style={{display:this.state.buttonDisplay}}>Start Fetching</button>
          </div>
        }
        <Footer />
      </div>
    ); 
  }
}

export default App;