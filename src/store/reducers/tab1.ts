export type tab1StoreType = {
    value: number
}

export const tab1Store = {
    value: 100,
}

export type tab1ReducerAction = {
    type: 'ADD',
    value: number,
}

export const tab1Reducer = (store: tab1StoreType = tab1Store, action: tab1ReducerAction) => {

    switch(action.type) {

        case 'ADD':

            return {...store, value: action.value};

        default:

            return store;

    }

}