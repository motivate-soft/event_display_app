import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ onChange, ...rest }) {
    return (
        <div className="search-input-box mb-4">
            <FaSearch />
            <input name="keyword" type="text" onChange={onChange} {...rest} />
        </div>
    );
}
