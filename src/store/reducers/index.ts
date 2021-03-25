import { combineReducers } from 'redux';
import { tab1Reducer, tab1StoreType } from './tab1';
export default combineReducers({
    tab1Reducer
});

export type Reducers = {
    tab1Reducer : tab1StoreType
}
