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
            selectedOption: "",
        }
        this.teamID = {
            padres: 135,
            team2: 136,
            team3: 137,
        }
    }


    componentDidMount() {
        fetchRoster(this.teamID.padres)
            .then(roster => {
                this.setState({
                    roster: roster,
                    isFetchingRoster: false,
                    selectedOption: roster.length > 0 ? roster[0].value : "", // Add this line
                });
            })
            .catch(error => {
                console.log('Error fetching roster:', error);
            });
    }

     onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleDropdownChange = (selectedOption) => {
        const teamID = this.teamID[selectedOption]; // Get the teamID based on the selected option
        fetchRoster(teamID) // Fetch the roster using the selected teamID
            .then((roster) => {
                this.setState({ roster, selectedOption });
            })
            .catch((error) => {
                console.log("Error fetching roster:", error);
            });
    };

    render() {
        const { roster, searchField, isFetchingRoster } = this.state;

        const dropdownOptions = [
            { value: "padres", label: "Padres" },
            { value: "team2", label: "Team 2" },
            { value: "team3", label: "Team 3" },
        ];

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
                <Dropdown
                    options={dropdownOptions}
                    onSelect={this.handleDropdownChange}
                />
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