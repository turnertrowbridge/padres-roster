import Card from "./Card";

function CardList({ roster, selectedTeam }) {
    const sortedRoster = roster.sort((a, b) => a.lastName.localeCompare(b.lastName));

    return (
        <>
            {
                sortedRoster.map(player => {
                    return(
                        <Card key={player.id} {...player} selectedTeam={selectedTeam}/>
                    );
                })
        }
        </>
    );
}

export default CardList;