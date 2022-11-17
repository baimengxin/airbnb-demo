import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchdata',  (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then(res => {
        dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then(res => {
        dispatch(changeDisCountInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        disCountInfo: {}
    },
    reducers: {
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDisCountInfoAction(state, { payload }) {
            state.disCountInfo = payload
        }
    },
    // extraReducers: {
    //     [fetchHomeDataAction.fulfilled](state, {payload}) {
    //         // console.log(payload);
    //         state.goodPriceInfo = payload
    //     }
    // }
})

export const { 
    changeGoodPriceInfoAction, 
    changeHighScoreInfoAction,
    changeDisCountInfoAction
} = homeSlice.actions
export default homeSlice.reducer