import { memo } from 'react';

interface SearchProps {
    onChange: (text: string) => void;
}

const SearchInputComponent = ({ onChange }: SearchProps) => {
    console.log('Search rendered!');

    return <input
        type='text'
        placeholder='Search users...'
        onChange={(e) => onChange(e.target.value)}
    />;
}

export const SearchInput = memo(SearchInputComponent);