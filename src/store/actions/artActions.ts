import { Art } from '@utils/art';
import { Action } from 'redux';
export const LOAD_RANDOM_ARTS = 'LOAD_RANDOM_ARTS';

export interface LoadRandomArtsAction extends Action {
    type: 'LOAD_RANDOM_ARTS';
    payload: Art[];
}
export const loadRandomArtsAction = (arts: Art[]): LoadRandomArtsAction => ({
    type: LOAD_RANDOM_ARTS,
    payload: arts,
});

export type ArtActionTypes = LoadRandomArtsAction;
