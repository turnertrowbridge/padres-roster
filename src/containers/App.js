import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import fetchRoster from "../components/RosterFetch";
import "./App.css"
import Dropdown from "../components/Dropdown";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roster: [],
            searchField: '',
            isFetchingRoster: true,
            selectedTeam: "Padres",
        }
        this.teamID = {
            Padres: 135,
            Mariners: 136,
            Giants: 137,
            Rockies: 115,
        }
    }


    componentDidMount() {
        fetchRoster(this.teamID.Padres)
            .then(roster => {
                this.setState({
                    roster: roster,
                    isFetchingRoster: false,
                    selectedTeam: "Padres",
                });
            })
            .catch(error => {
                console.log('Error fetching roster:', error);
            });
    }

     onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleDropdownChange = (selectedTeam) => {
        const teamID = this.teamID[selectedTeam]; // Get the teamID based on the selected option
        fetchRoster(teamID) // Fetch the roster using the selected teamID
            .then((roster) => {
                this.setState({ roster, selectedTeam });
            })
            .catch((error) => {
                console.log("Error fetching roster:", error);
            });
    };

    render() {
        const { roster, searchField, isFetchingRoster } = this.state;

        const dropdownOptions = [
            { value: "Padres", label: "Padres" },
            { value: "Mariners", label: "Mariners" },
            { value: "Giants", label: "Giants" },
            { value: "Rockies", label: "Rockies"}
        ];

        if (isFetchingRoster) {
        }

        const filteredRoster = roster.filter(player =>{
            const fullName = player.fullName || "";
            return fullName.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className={`tc ${this.state.selectedTeam.toLowerCase()}-theme`}>
                    <h1 className='f1'>2022-2023 {this.state.selectedTeam} 40-Man Roster</h1>
                    <Dropdown
                        options={dropdownOptions}
                        onSelect={this.handleDropdownChange}
                    />
                    <SearchBox searchChange={this.onSearchChange} selectedTeam={this.state.selectedTeam}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList roster={filteredRoster} selectedTeam={this.state.selectedTeam}/>
                        </ErrorBoundary>
                    </Scroll>
            </div>
        );
    }
}

export default App;