import React, { useReducer } from 'react';
import CompareContext from './compareContext';

const defaultCompareState = {
    items: []
}

const compareReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingItem = state.items.find(item => item.name === action.items.name);
        if (existingItem) {
            return state
        }
        const updateItems = state.items.concat(action.items)
        return {
            items: updateItems,
        }
    }
    if (action.type === 'REMOVE') {
        const filteredArray = state.items.filter(item => item.id !== action.id);
        return {
            items: filteredArray
        }
    }
    return defaultCompareState
}

const CompareProvider = (props) => {
    const [compareState, dispatchAction] = useReducer(compareReducer, defaultCompareState)

    const addToCompare = (item) => {
        dispatchAction({ type: 'ADD', items: item })
    };
    const removeFromCompare = (id) => {
        dispatchAction({ type: 'REMOVE', id: id })
    };

    const compareProducts = {
        items: compareState.items,
        addToCompare: addToCompare,
        removeFromCompare: removeFromCompare
    }

    return (
        <CompareContext.Provider value={compareProducts}>
            {props.children}
        </CompareContext.Provider>
    );
}

export default CompareProvider;
