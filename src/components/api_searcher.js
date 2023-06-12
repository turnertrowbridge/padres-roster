function fetchRoster() {
    const padres_api = "https://statsapi.mlb.com/api/v1/teams/135/roster";
    const player_api_template = "https://statsapi.mlb.com"

    fetch(padres_api) // fetch the padres roster
        .then(resp => resp.json())
        .then(result => {
            const rosterPromises = result.roster.map(info => { // search through each player on roster
                return fetch(player_api_template + info.person.link) // get a player's enhanced information
                    .then(resp => resp.json())
                    .then(result => {
                        console.log(result.people[0])
                    })
                    .catch(() => console.log('Player Data Fetch Error'));
            });
            Promise.all(rosterPromises)
        })
        .catch(() => console.log('Roster Data Fetch Error'));
}

fetchRoster();