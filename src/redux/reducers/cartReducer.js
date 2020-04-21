const initialState = {
    cartId: '',
    cartItems: []
}

// ACTION TYPES 
const UPDATE_ITEM = 'UPDATE_ITEM';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// ACTION BUILDERS 
export function updateItem (item) {
    return {
        type: UPDATE_ITEM,
        payload: item
    }
};
export function addItem (item) {
    return{
        type: ADD_ITEM,
        payload: item
    }
};

export function deleteItem (id) {
    return{
        type: DELETE_ITEM,
        payload: id
    }
};

// REDUCER 
export default function cartReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case UPDATE_ITEM:
            let updatedCartItems = []
            updatedCartItems = state.cartItems.map(item => {
                if (item.productId === payload.productId){
                    return payload
                } else {
                    return item
                }
            })
            return ({...state, cartItems: updatedCartItems})
        case ADD_ITEM:
            return {...state, cartItems: [...cartItems, payload]}
        case DELETE_ITEM:
            let updatedCartItem = [];
            updatedCartItem = state.cartItems.filter(item => {
                if (item.productId === payload){
                    return false
                } else {
                    return true
                }
            })
            return ({...state, cartItems: updatedCartItem})
            default: return state
    }
}