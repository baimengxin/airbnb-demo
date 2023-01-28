import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const {roomList, totalCount, loading} = useSelector((state) => ({
   roomList: state.entire.roomList,
   totalCount: state.entire.totalCount,
   loading: state.entire.loading
  }), shallowEqual)

  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemHandleClick = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住宿</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={ e => itemHandleClick(item)} />
            )
          })
        }
      </div>

      { loading && <div className="cover"></div> }
      
    </RoomsWrapper>
  )
})

EntireRooms.propTypes = {}

export default EntireRooms