import {
    loadDetailedInfoAction,
    loadRandomArtsAction,
} from '../actions/artActions';
import artReducer, { ArtState } from './artReducer';

const initialState: ArtState = {
    searchResults: [],
    randomArts: [],
    paginationArts: [],
    totalPages: 0,
    detailedInfo: {
        id: '',
        title: '',
        artist_display: '',
        date_display: '',
        image_id: '',
        place_of_origin: '',
        dimensions: '',
        credit_line: '',
        gallery_title: '',
    },
    isLoading: false,
};
describe('artReducer', () => {
    it('should update the randomArts property in the state', () => {
        const randomArts = [
            {
                id: '123',
                title: 'Mona Lisa',
                artist_display: 'Leonardo da Vinci',
                date_display: '1503-1519',
                image_id: 'abc123',
            },
        ];

        const action = loadRandomArtsAction(randomArts);

        const newState = artReducer(initialState, action);

        expect(newState.randomArts).toEqual(randomArts);
        expect(newState.isLoading).toBe(false);
    });
    it('should update the paginationArts property in the state', () => {
        const paginationArts = [
            {
                id: '123',
                title: 'Mona Lisa',
                artist_display: 'Leonardo da Vinci',
                date_display: '1503-1519',
                image_id: 'abc123',
            },
        ];

        const action = loadRandomArtsAction(paginationArts);

        const newState = artReducer(initialState, action);

        expect(newState.randomArts).toEqual(paginationArts);
        expect(newState.isLoading).toBe(false);
    });
    it('should update the detailed info property in the state', () => {
        const detailedInfo = [
            {
                id: '123',
                title: 'Mona Lisa',
                artist_display: 'Leonardo da Vinci',
                date_display: '1503-1519',
                image_id: 'abc123',
                place_of_origin: 'Italy',
                dimensions: '120*100',
                credit_line: 'Museum',
                gallery_title: 'Gallery 123',
            },
        ];

        const action = loadDetailedInfoAction(detailedInfo);

        const newState = artReducer(initialState, action);

        expect(newState.detailedInfo).toEqual(detailedInfo);
        expect(newState.isLoading).toBe(false);
    });
});
