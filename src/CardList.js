import Card from "./Card";

function CardList({ players }) {
    return (
        <>
            {
                players.map((player, id) => {
                    return(
                        <Card
                            key={id}
                            player={player}
                        />
                    );
                })
        }
        </>
    );
}

export default CardList;