import {
    ArtActionTypes,
    LOAD_RANDOM_ARTS,
    loadRandomArtsAction,
} from '@store/actions/artActions';
import { Art } from '@utils/art';
import { api } from '../../api';
import { AppThunk } from '@store/index';

export type ArtState = {
    searchResults: Art[];
    randomArts: Art[];
};

const initialState: ArtState = {
    searchResults: [],
    randomArts: [],
};

export default function artReducer(
    state: ArtState = initialState,
    action: ArtActionTypes,
): ArtState {
    switch (action.type) {
        case LOAD_RANDOM_ARTS:
            return { ...state, randomArts: action.payload };
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
