function Card( {id, fullName, primaryNumber, primaryPosition, currentAge, height, weight, status, batAndPitchSide, nameSlug} ){
    const imgURL = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${id}/headshot/67/current`
    const link = `https://www.mlb.com/player/${nameSlug}`
    const handleClick = () => {
        window.open(link, '_blank');
    };

    return(
        <div className={"bg-light-yellow hover-bg-gold dib br3 pa3 ma2 grow bw2 shadow-5"} onClick={handleClick}>
            <div>
                <img alt={fullName} src={imgURL} />
                <h2>{fullName}</h2>
                <p>#{primaryNumber}</p>
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