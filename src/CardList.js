import Card from "./Card";

function CardList({ players }) {
    return (
        <>
            {
                players.map((player, index) => {
                    return(
                        <Card
                        key={index}
                        index={index}
                        />
                    );
                })
        }
        </>
    );
}

export default CardList;