import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})
  
export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})
  
export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeLoadingAction = (loading) => ({
    type: actionTypes.CHANGE_LOADING,
    loading
}) 

export const fetchEntireDataAction = (page = 0) => {
    return async (dispatch) => {
        dispatch(changeCurrentPageAction(page))

        dispatch(changeLoadingAction(true))
        const res = await getEntireRoomList(page * 20)
        dispatch(changeLoadingAction(false))

        // 保存数据
        dispatch(changeRoomListAction(res.list))
        dispatch(changeTotalCountAction(res.totalCount))
    }
}