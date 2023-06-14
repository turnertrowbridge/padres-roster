import Card from "./Card";

function CardList({ roster, selectedTeam }) {
    return (
        <>
            {
                roster.map(player => {
                    return(
                        <Card key={player.id} {...player} selectedTeam={selectedTeam}/>
                    );
                })
        }
        </>
    );
}

export default CardList;