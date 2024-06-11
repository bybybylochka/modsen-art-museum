import { useEffect, useState } from 'react';
import { Art } from '@utils/art';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<Art[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const addToFavorites = (art: Art) => {
        const updatedFavorites = [...favorites, art];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const isFavorites = (art: Art) => {
        console.log(favorites);
        console.log(art);
        return favorites.some((favorite) => favorite.id === art.id);
    };

    return { favorites, addToFavorites, isFavorites };
};

export default useFavorites;
