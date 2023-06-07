import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"
import {players} from "./players";

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
                <h1>2022-2023 Padres Roster</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList players={filteredPlayers}/>
            </div>
        );
    }
}

export default App;