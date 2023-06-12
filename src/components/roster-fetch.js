function fetchRoster() {
    const padresAPI = "https://statsapi.mlb.com/api/v1/teams/135/roster";
    const playerAPI_template = "https://statsapi.mlb.com"

    return fetch(padresAPI) // fetch the padres roster
        .then(resp => resp.json())
        .then(result => {
            const rosterPromises = result.roster.map(info => { // search through each player on roster
                return fetch(playerAPI_template + info.person.link) // get a player's enhanced information
                    .then(resp => resp.json())
                    .then(result => {
                        const player = result.people[0]; // store the player's info
                        const newPlayer = { // create a player object
                            id: player.id,
                            fullName: player.fullName,
                            primaryNumber: player.primaryNumber,
                            primaryPosition: player.primaryPosition.name,
                            currentAge: player.currentAge,
                            batAndPitchSide: `${player.batSide.description}/${player.pitchHand.description}`,
                            height: player.height,
                            weight: player.weight,
                            status: player.active ? "Active" : "Inactive",
                            nameSlug: player.nameSlug,
                        }
                        return newPlayer;
                    })
                    .catch(() => console.log('Player Data Fetch Error'));
            });
            return Promise.all(rosterPromises);
        })
        .catch(() => console.log('Roster Data Fetch Error'));
}

export default fetchRoster;