import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component{

    render(){
        return(
            <div className="navbar">
                <a href='https://ramanand03.github.io/fetch-pokemon-api' target='/'>Pokemons</a>
            </div>
        )
    }
}

export default Navigation;