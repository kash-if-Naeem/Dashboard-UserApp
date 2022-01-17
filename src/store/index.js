import { configureStore, createSlice } from "@reduxjs/toolkit";

const deleteSlice = createSlice({
    name: 'del',
    initialState: { items: [], isDeleted: false },
    reducers: {
        delete(state,action){
            const id = action.payload
            state.items = state.items.filter(item => item.id !== id)
        }
    }
})

export const deleteAction = deleteSlice.actions

const store = configureStore({
    reducer: {
        delete: deleteSlice.reducer
    }
})

export default store