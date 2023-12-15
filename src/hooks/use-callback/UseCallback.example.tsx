import { useCallback, useState } from 'react';
import './styles.css';
import { SearchInput } from './searchInput.component';
import { topMovies } from '../../constants/data';
import { shuffleMovies } from '../../services/helpers';

type Props = {

}

export const UseCallbackExample: React.FC<Props> = () => {

    const [movies, setMovies] = useState(topMovies);

    const handleSearch = useCallback(
        (text: string) => {
            console.log('first index: ', movies[0]);

            const filteredUsers = topMovies.filter(
                (movie) =>
                    movie.toLowerCase().includes(text.toLowerCase()),
            );
            setMovies(filteredUsers);
        },
        [movies],
    );

    const handleShuffleMovies = () => {
        const shuffledMovies = shuffleMovies(topMovies);
        setMovies(shuffledMovies);
    };

    return (
        <div className='tutorial'>
            <div className='align-center mb-2 flex'>
                <button onClick={handleShuffleMovies}>
                    Shuffle
                </button>

                <SearchInput onChange={handleSearch} />
            </div>
            <ul>
                {
                    movies.map((user) => <li key={user}>{user}</li>)
                }
            </ul>
        </div>
    );
}