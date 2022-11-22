import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData } from '@/services'
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

    getHomeHotRecommendData().then(res => {
        dispatch(changeRecommendInfoAction(res))
    })

    getHomeLongforData().then(res => {
        dispatch(changeLongForInfoAction(res))
    })
})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        goodPriceInfo: {},
        highScoreInfo: {},
        disCountInfo: {},
        recommendInfo: {},
        longforInfo: {}
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
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongForInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
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
    changeDisCountInfoAction,
    changeRecommendInfoAction,
    changeLongForInfoAction
} = homeSlice.actions
export default homeSlice.reducer