import { useState, useEffect } from 'react';

const initialMovies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {
    const [movies, setMovies] = useState(initialMovies);
    const [filteredMovies, setFilteredMovies] = useState(initialMovies);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newGenre, setNewGenre] = useState('');

    // Estrai generi unici
    const genres = ['Tutti', ...new Set(movies.map((movie) => movie.genre))];

    useEffect(() => {
        let filtered = movies;
        if (selectedGenre && selectedGenre !== 'Tutti') {
            filtered = filtered.filter((movie) => movie.genre === selectedGenre);
        }
        if (searchQuery) {
            filtered = filtered.filter((movie) =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
            );
        }
        setFilteredMovies(filtered);
    }, [movies, selectedGenre, searchQuery]);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddMovie = (e) => {
        e.preventDefault();
        if (newTitle && newGenre) {
            // Controlla se il genere è presente nella lista originale
            const originalGenres = new Set(initialMovies.map((movie) => movie.genre));
            if (!originalGenres.has(newGenre)) {
                // Se non presente, aggiungilo (ma poiché genres è calcolato da movies, basta aggiungere il film)
                // Qui non serve fare nulla extra, poiché movies si aggiorna
            }
            setMovies([...movies, { title: newTitle, genre: newGenre }]);
            setNewTitle('');
            setNewGenre('');
        }
    };

    return (
        <div>
            <h1>Filtro Film per Genere</h1>

            {/* Filtro per genere */}
            <select value={selectedGenre} onChange={handleGenreChange}>
                {genres.map((genre) => (
                    <option key={genre} value={genre === 'Tutti' ? '' : genre}>
                        {genre}
                    </option>
                ))}
            </select>

            {/* Campo di ricerca per titolo */}
            <input
                type="text"
                placeholder="Cerca per titolo..."
                value={searchQuery}
                onChange={handleSearchChange}
            />

            {/* Lista film */}
            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        {movie.title} - {movie.genre}
                    </li>
                ))}
            </ul>

            {/* Form per aggiungere film */}
            <h2>Aggiungi un nuovo film</h2>
            <form onSubmit={handleAddMovie}>
                <input
                    type="text"
                    placeholder="Titolo del film"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Genere del film"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    required
                />
                <button type="submit">Aggiungi Film</button>
            </form>
        </div>
    );
}

export default App;
