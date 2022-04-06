import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mainColor: "#3A3C3F"
}

const _setMainColor = (state, action) => {
    state.mainColor = action.payload;
};

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMainColor1: _setMainColor
    },
});

const { reducer, actions } = settings;

export const { setMainColor1 } = actions;

export default reducer;

export const setMainColor = (color) => {
    return async (dispatch) => {
        return dispatch(setMainColor1(color));
    }
};