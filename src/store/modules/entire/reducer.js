import * as actionTypes from "./constants"

const initialState = {
    currentPage: 0, // 当前页码数
    roomList: [],   // 展示列表 
    totalCount: 0,   // 总数量
    loading: false
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case actionTypes.CHANGE_TOTAL_COUNT:
            return { ...state, totalCount: action.totalCount }
        case actionTypes.CHANGE_ROOM_LIST:
            return { ...state, roomList: action.roomList }
        case actionTypes.CHANGE_LOADING: 
            return { ...state, loading: action.loading }
        default:
            return state
    }
}   

export default reducer