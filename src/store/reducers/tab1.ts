import { tab1ReducerAction, tab1StoreType } from "../actions/tab1";

export const tab1Store = {

    value: 0,

}

export const tab1Reducer = (store: tab1StoreType, action: tab1ReducerAction) => {

    switch(action.type) {

        case 'ADD':

            return {...store, value: action.value};

        default:

            return store;

    }

}