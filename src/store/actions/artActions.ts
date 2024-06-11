import { Art } from '@utils/art';
import { Action } from 'redux';
export const LOAD_RANDOM_ARTS = 'LOAD_RANDOM_ARTS';

export const LOAD_PAGINATION_ARTS = 'LOAD_PAGINATION_ARTS';

export interface LoadRandomArtsAction extends Action {
    type: 'LOAD_RANDOM_ARTS';
    payload: Art[];
}
export const loadRandomArtsAction = (arts: Art[]): LoadRandomArtsAction => ({
    type: LOAD_RANDOM_ARTS,
    payload: arts,
});

export interface LoadPaginationArtsAction extends Action {
    type: 'LOAD_PAGINATION_ARTS';
    payload: { arts: Art[]; totalPages: number };
}
export const loadPaginationArtsAction = (
    arts: Art[],
    totalPages: number,
): LoadPaginationArtsAction => ({
    type: LOAD_PAGINATION_ARTS,
    payload: { arts, totalPages },
});

export type ArtActionTypes = LoadRandomArtsAction | LoadPaginationArtsAction;
