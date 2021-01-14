import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<SearchInputProps> = (props: SearchInputProps) => {
    const { onChange, ...rest } = props;
    return (
        <div className="search-input-box mb-4">
            <FaSearch />
            <input name="keyword" type="text" onChange={onChange} {...rest} />
        </div>
    );
};

export default SearchInput;
