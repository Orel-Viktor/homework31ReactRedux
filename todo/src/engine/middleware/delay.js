
export const delay = (store) => (dispatch) => (action) => {
    const delayMS = action.meta?.delayMS
    if (delayMS) {
        setTimeout(() => dispatch(action), delayMS)
    } else {
        dispatch(action)
    }
}