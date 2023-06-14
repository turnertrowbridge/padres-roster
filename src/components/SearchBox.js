function SearchBox({ searchField, searchChange, selectedTeam }) {

    let cardClass = "";

    switch (selectedTeam) {
        case 'Padres':
            cardClass = 'bg-light-yellow';
            break;
        case 'Mariners':
            cardClass = 'bg-light-blue';
            break;
        case 'Giants':
            cardClass = 'bg-white';
            break;
        default:
            cardClass = 'bg-light-yellow';
            break;
    }

    return (
        <div className='pa2'>
            <input
                className={`pa3 ba bg-black-80 ${cardClass}`}
                type='search'
                placeholder='Search Players'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;