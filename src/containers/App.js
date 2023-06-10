import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import {players} from "../components/players";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
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
        const { players, searchField } = this.state;
        const filteredPlayers = players.filter(player =>{
            return player.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1 className='f1'>2022-2023 Padres Roster</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList players={filteredPlayers}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;