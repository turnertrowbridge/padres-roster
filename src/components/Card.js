function Card( {id, fullName, lastName, primaryNumber, primaryPosition, currentAge, height, weight, status, batAndPitchSide, nameSlug, selectedTeam} ){
    const imgURL = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${id}/headshot/67/current`
    const link = `https://www.mlb.com/player/${nameSlug}`
    const handleClick = () => {
        window.open(link, '_blank');
    };

    let cardClasses = "";

    switch (selectedTeam) {
        case 'Padres':
            cardClasses = 'bg-light-yellow hover-bg-gold';
            break;
        case 'Mariners':
            cardClasses = 'bg-light-blue hover-bg-blue';
            break;
        case 'Giants':
            cardClasses = 'bg-white hover-bg-orange';
            break;
        case 'Rockies':
            cardClasses = 'bg-light-purple hover-bg-purple'
            break;
        default:
            cardClasses = 'bg-light-yellow hover-bg-gold';
            break;
    }

    return(
        <div className={` ${cardClasses} dib br3 pa3 ma2 grow bw2 shadow-5 `} onClick={handleClick}>
            <div>
                <img alt={fullName} src={imgURL} />
                <h2>{fullName}</h2>
                <p>#{primaryNumber}</p>
                <p>Position: {primaryPosition}</p>
                <p>Age: {currentAge}</p>
                <p>B/T: {batAndPitchSide}</p>
                <p>Height: {height}</p>
                <p>Weight: {weight} lbs</p>
            </div>
        </div>
    );
}

export default Card;