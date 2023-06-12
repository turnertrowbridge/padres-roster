function Card( {id, fullName, primaryNumber, primaryPosition, currentAge, height, weight, status, batAndPitchSide, link} ){
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return(
        <div className={"bg-light-yellow hover-bg-gold dib br3 pa3 ma2 grow bw2 shadow-5"} onClick={handleClick}>
            <div>
                {/*<img alt={link.image.alt} src= {link.image.src} />*/}
                <h2>{fullName}</h2>
                <p># {primaryNumber}</p>
                <p>Position: {primaryPosition}</p>
                <p>Age: {currentAge}</p>
                <p>B/T: {batAndPitchSide}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
}

export default Card;