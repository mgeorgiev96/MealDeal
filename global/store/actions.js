import * as ACTION_TYPES from './action_types'

export const setShow = (type)=>{
    return {
        type: ACTION_TYPES.SET_SHOW,
        payload: type
    }
}

export const logoutUser = ()=>{
    return {
        type: ACTION_TYPES.LOGOUT
    }
}

export const loginUser = (user)=>{
    return {
        type: ACTION_TYPES.LOGIN,
        payload: user
    }
}

export const changeOption = (name)=>{
    return {
        type: ACTION_TYPES.OPEN_OPTION,
        payload: name
    }
}
export const removeItem = (name)=>{
    return {
        type: ACTION_TYPES.REMOVE_ITEM,
        payload: name
    }
}

export const addItem = (item)=>{
    return {
        type: ACTION_TYPES.ADD_ITEM,
        payload: item
    }
}

export const trackOrder = (time)=>{
    return {
        type: ACTION_TYPES.TRACK_ORDER,
        payload: time
    }
}

export const clearCart = ()=>{
    return {
        type: ACTION_TYPES.CLEAR_CART
    }
}

export const setSession = (data)=>{
    return {
        type: ACTION_TYPES.SESSION,
        payload: data
    }
}

export const changeNumber = (item)=>{
    return {
        type: ACTION_TYPES.CHANGE_NUMBER,
        payload: item
    }
}

export const reduceNumber = (item)=>{
    return {
        type: ACTION_TYPES.REDUCE_NUMBER,
        payload: item
    }
}