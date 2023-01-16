
export const delay = (store) => (dispatch) => (action) => {
    const res = dispatch(action)
    const delayMS = action.meta?.delayMS
    if (delayMS) {
        setTimeout(() => dispatch(action), delayMS)
    } else {
        return dispatch(action)
    }
    console.log(action)
}