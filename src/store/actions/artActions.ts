import { Art } from '@utils/art';
import { Action } from 'redux';
import { DetailedArt } from '@utils/detailedArt';
export const LOAD_RANDOM_ARTS = 'LOAD_RANDOM_ARTS';

export const LOAD_PAGINATION_ARTS = 'LOAD_PAGINATION_ARTS';
export const LOAD_DETAILED_INFO = 'LOAD_DETAILED_INFO';

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

export interface LoadDetailedInfoAction extends Action {
    type: 'LOAD_DETAILED_INFO';
    payload: DetailedArt;
}
export const loadDetailedInfoAction = (
    art: DetailedArt,
): LoadDetailedInfoAction => ({
    type: LOAD_DETAILED_INFO,
    payload: art,
});

export type ArtActionTypes =
    | LoadRandomArtsAction
    | LoadPaginationArtsAction
    | LoadDetailedInfoAction;
