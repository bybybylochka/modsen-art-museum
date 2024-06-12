import {
    ArtActionTypes,
    LOAD_DETAILED_INFO,
    LOAD_PAGINATION_ARTS,
    LOAD_RANDOM_ARTS,
    loadDetailedInfoAction,
    loadPaginationArtsAction,
    loadRandomArtsAction,
} from '@store/actions/artActions';
import { Art } from '@utils/art';
import { api } from '../../api';
import { AppThunk } from '@store/index';
import { DetailedArt } from '@utils/detailedArt';

export type ArtState = {
    searchResults: Art[];
    randomArts: Art[];
    paginationArts: Art[];
    totalPages: number;
    detailedInfo: DetailedArt;
    isLoading: boolean;
};

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
        case LOAD_DETAILED_INFO:
            return {
                ...state,
                detailedInfo: action.payload,
            };
        default:
            return state;
    }
}

export const loadRandomArts = (): AppThunk => async (dispatch) => {
    let page = Math.floor(Math.random() * 1000) + 1;
    try {
        const arts = await api.loadRandomArts(page);
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

export const loadDetailedInfo =
    (id?: string): AppThunk =>
    async (dispatch) => {
        try {
            const art = await api.loadDetailedInfo(id);
            dispatch(loadDetailedInfoAction(art.data));
        } catch (err) {
            // обработка ошибки
        }
    };
