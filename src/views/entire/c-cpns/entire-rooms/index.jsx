import RoomItem from '@/components/room-item'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { RoomsWrapper } from './style'

const EntireRooms = memo((props) => {
  const {roomList, totalCount, loading} = useSelector((state) => ({
   roomList: state.entire.roomList,
   totalCount: state.entire.totalCount,
   loading: state.entire.loading
  }), shallowEqual)

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}处住宿</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id} />
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