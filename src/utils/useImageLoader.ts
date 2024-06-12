import { useEffect, useState } from 'react';

const useImageLoader = (imageUrl: string) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
    }, [imageUrl]);

    return imageLoaded;
};

export default useImageLoader;
