function Card({ player }){
    const handleClick = () => {
        window.open(player.link, '_blank');
    };

    return(
        <div className={"bg-light-yellow hover-bg-gold dib br3 pa3 ma2 grow bw2 shadow-5"} onClick={handleClick}>
            <div>
                <img alt={player.image.alt} src={player.image.src} />
                <h2>{player.name}</h2>
                <p>Number: {player.number}</p>
                <p>Position: {player.position}</p>
                <p>B/T: {player.b_t}</p>
                <p>Height: {player.height}</p>
                <p>Weight: {player.weight}</p>
                <p>Age: {player.age}</p>
            </div>
        </div>
    );
}

export default Card;