function fetchRoster() {
    const padres_url = "http://statsapi.mlb.com/api/v1/teams/135/roster";

    const promise = fetch(padres_url)
        .then(resp => resp.json())
        .then(result => {
            const roster = result.roster.reduce((acc, player) => {

                const newPlayer = {
                    id: player.person.id,
                    fullName: player.person.fullName,
                    jerseyNumber: player.jerseyNumber,
                    position: player.position.name,
                    status: player.status.description,
                }

                acc.push(newPlayer);
                return acc;
            }, []);

            console.log(roster);
        })
        .catch(() => console.log('Roster Data Fetch Error'));
}

fetchRoster();