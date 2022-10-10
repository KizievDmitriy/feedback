import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactSlice = createSlice({
    name: 'feedback',
    initialState: { items: []},
    reducers: {
        addFeedback(state, { payload }) {
            state.items.push(payload);
        },
    }
});

export const persistConfig = {
    key: 'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const { addContact, } = contactSlice.actions;