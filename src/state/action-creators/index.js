export const addToCart = (nos) => {
return (dispatch) => {
    dispatch({
        type: 'add',
        payload: nos
    })
}
}

export const removeFromCart = (nos) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: nos
        })
    }   
}