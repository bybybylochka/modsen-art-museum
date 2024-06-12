import axios from 'axios';

const instanceArt = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
});

export const api = {
    loadRandomArts(page: number) {
        console.log('load random arts');
        return instanceArt
            .get(
                `/artworks?page=${page}&limit=9&fields=id,title,artist_display,date_display,image_id`,
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error loading random arts:', error);
                throw new Error(
                    'An error occurred while uploading other works of art. Please try again later.',
                );
            });
    },
    loadPaginationArts(page: number, doSort: boolean, query: string) {
        let doSortRequest = doSort ? '&sort=date_end' : '';
        return instanceArt
            .get(
                `/artworks/search?q=${query}&fields=id,title,artist_display,date_display,image_id&page=${page}&limit=3` +
                    doSortRequest,
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error loading arts:', error);
                throw new Error(
                    'An error occurred while uploading works of art for you. Please try again later.',
                );
            });
    },
    loadDetailedInfo(id?: string) {
        return instanceArt
            .get(
                `/artworks/${id}?fields=id,title,artist_display,date_display,image_id,place_of_origin,dimensions,credit_line,gallery_title`,
            )
            .then((response) => response.data)
            .catch((error) => {
                console.error('Error loading detailed info about arts:', error);
                throw new Error(
                    'An error occurred while uploading detailed info art. Please try again later.',
                );
            });
    },
};
