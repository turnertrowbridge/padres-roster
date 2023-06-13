import Card from "./Card";

function CardList({ roster, teamID }) {
    return (
        <>
            {
                roster.map(player => {
                    return(
                        <Card key={player.id} {...player} />
                    );
                })
        }
        </>
    );
}

export default CardList;