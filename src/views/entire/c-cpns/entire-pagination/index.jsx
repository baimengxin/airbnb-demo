import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Pagination } from 'antd';

import { PageinationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntireDataAction } from '@/store/modules/entire/createActions';

const EntirePagination = memo((props) => {
  const {currentPage, roomList, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
  }))

  // 每页数量
  const pageSize = 20
  const start = currentPage * pageSize + 1
  const end = (currentPage + 1) * pageSize
  // const total = Math.ceil(totalCount / pageSize)

  // 分页事件处理逻辑
  const dispatch = useDispatch()
  function pageChangeHandle(page, pageSize) {
    // 更新最新的页码
    dispatch(fetchEntireDataAction(page - 1))
  }

  return (
    <PageinationWrapper>
      {
        !!roomList.length && (
          <div className="page">
            <Pagination defaultCurrent={1} 
              total={totalCount} 
              showSizeChanger={false}
              defaultPageSize={pageSize}
              onChange={pageChangeHandle} />
            <div className="info">
            第 {start} - {end} 个房源, 共超过 {totalCount} 个
            </div>
          </div>
        )
      }
    </PageinationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination