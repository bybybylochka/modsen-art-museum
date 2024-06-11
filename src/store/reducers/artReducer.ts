import {
    ArtActionTypes,
    LOAD_PAGINATION_ARTS,
    LOAD_RANDOM_ARTS,
    loadPaginationArtsAction,
    loadRandomArtsAction,
} from '@store/actions/artActions';
import { Art } from '@utils/art';
import { api } from '../../api';
import { AppThunk } from '@store/index';

export type ArtState = {
    searchResults: Art[];
    randomArts: Art[];
    paginationArts: Art[];
    totalPages: number;
};

const initialState: ArtState = {
    searchResults: [],
    randomArts: [],
    paginationArts: [],
    totalPages: 0,
};

export default function artReducer(
    state: ArtState = initialState,
    action: ArtActionTypes,
): ArtState {
    switch (action.type) {
        case LOAD_RANDOM_ARTS:
            return { ...state, randomArts: action.payload };
        case LOAD_PAGINATION_ARTS:
            return {
                ...state,
                paginationArts: action.payload.arts,
                totalPages: action.payload.totalPages,
            };
        default:
            return state;
    }
}

export const loadRandomArts = (): AppThunk => async (dispatch) => {
    let page = Math.floor(Math.random() * 1000) + 1;
    try {
        const arts = await api.loadRandomArts(page);
        console.log(arts);
        dispatch(loadRandomArtsAction(arts.data));
    } catch (error) {
        // обработка ошибки
    }
};

export const loadPaginationPage =
    (page: number, doSort: boolean, query: string): AppThunk =>
    async (dispatch) => {
        try {
            const arts = await api.loadPaginationArts(page, doSort, query);
            dispatch(
                loadPaginationArtsAction(
                    arts.data,
                    arts.pagination.total_pages,
                ),
            );
        } catch (err) {
            // обработка ошибки
        }
    };
