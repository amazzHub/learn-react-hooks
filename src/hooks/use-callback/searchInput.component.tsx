import { memo } from 'react';

interface SearchProps {
    onChange: (text: string) => void;
}

const SearchInputComponent = ({ onChange }: SearchProps) => {
    console.log('Rending search...');

    return <input
        className='search-input'
        type='text'
        placeholder='Search movies...'
        onChange={(e) => onChange(e.target.value)}
    />;
}

export const SearchInput = memo(SearchInputComponent);