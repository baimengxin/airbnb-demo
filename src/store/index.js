import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
        detail: detailReducer
    }
})

// console.log(store.getState());

export default store