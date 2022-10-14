import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer
    }
})

// console.log(store.getState());

export default store