import Card from "./Card";

function CardList({ roster }) {
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