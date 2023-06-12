import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import fetchRoster from "../components/roster-fetch";
import "./App.css"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roster: [],
            searchField: '',
            isFetchingRoster: true,
        }
    }

    componentDidMount() {
        fetchRoster()
            .then(roster => {
                this.setState({ roster: roster, isFetchingRoster: false });
            })
            .catch(error => {
                console.log('Error fetching roster:', error);
            });
    }

     onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { roster, searchField, isFetchingRoster } = this.state;

        if (isFetchingRoster) {
        }

        const filteredRoster = roster.filter(player =>{
            const fullName = player.fullName || "";
            return fullName.toLowerCase().includes(searchField.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>2022-2023 Padres Roster</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList roster={filteredRoster}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;