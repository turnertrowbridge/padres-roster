import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox"

function App() {
    return (
        <div className='tc'>
            <h1>2022-2023 Padres Roster</h1>
            <SearchBox/>
            <CardList/>
        </div>
    )
}

export default App;