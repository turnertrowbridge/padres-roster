import Card from "./Card";
import {players} from "./players";

function CardList() {
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