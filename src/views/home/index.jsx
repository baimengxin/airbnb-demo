import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { useCallback } from 'react'
import { useState } from 'react'


const Home = memo(() => {
  // 从 redux 中获取数据
  const { disCountInfo ,goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    disCountInfo: state.home.disCountInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  // 处理数据
  const [name, setName] = useState('佛山') 
  const tabNames = disCountInfo.dest_address?.map(item => item.name)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  console.log(disCountInfo);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="discount">
          <SectionHeader title={disCountInfo.title} subtitle={disCountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
          <SectionRooms roomList={disCountInfo.dest_list?.[name]} itemWidth={'33.33%'} />
        </div>

        <HomeSectionV1 infoData={ goodPriceInfo } />
        <HomeSectionV1 infoData={ highScoreInfo } />
      </div>


      
    </HomeWrapper>
  )
})

export default Home