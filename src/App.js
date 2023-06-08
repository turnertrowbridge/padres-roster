import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import {players} from "./players";
import Scroll from "./Scroll";
import "./App.css"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            players: players,
            searchField: ''
        }
    }

     onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredPlayers = this.state.players.filter(players =>{
            return players.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>2022-2023 Padres Roster</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList players={filteredPlayers}/>
                </Scroll>
            </div>
        );
    }
}

export default App;