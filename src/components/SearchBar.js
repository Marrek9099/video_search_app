import React, { useState } from 'react';


const SearchBar = ({onTermChange}) => {
    const [term, setTerm] = useState('');

    const onFormSubmut = e => {
        e.preventDefault();
        onTermChange(term);
    }

    return (
            <form onSubmit={onFormSubmut}>
                Video Search
                <input value={term} onChange={ e => setTerm(e.target.value)} type="text"/> 
            </form>

    )
};


export default SearchBar;