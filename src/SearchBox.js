function SearchBox({ searchField, searchChange }) {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba bg-black-80 bg-light-yellow'
                type='search'
                placeholder='Search Players'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;