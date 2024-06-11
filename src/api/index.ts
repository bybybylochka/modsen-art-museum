import axios from 'axios';

const instanceArt = axios.create({
    baseURL: 'https://api.artic.edu/api/v1',
});

export const api = {
    loadRandomArts(page: number) {
        return instanceArt
            .get(
                `/artworks?page=${page}&limit=9&fields=id,title,artist_display,date_display,image_id`,
            )
            .then((response) => response.data)
            .catch(() => console.log('Ошибка загрузки art'));
    },
    loadPaginationArts(page: number, doSort: boolean, query: string) {
        let doSortRequest = doSort ? '&sort=date_end' : '';
        return instanceArt
            .get(
                `/artworks/search?q=${query}&fields=id,title,artist_display,date_display,image_id&page=${page}&limit=3` +
                    doSortRequest,
            )
            .then((response) => response.data)
            .catch(() => console.log('Ошибка загрузки пагинации art'));
    },
};
