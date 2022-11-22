import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'

import { isEmptyObj } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor'

const Home = memo(() => {
  // 从 redux 中获取数据
  const { disCountInfo, goodPriceInfo, highScoreInfo, recommendInfo, longforInfo } = useSelector((state) => ({
    disCountInfo: state.home.disCountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  // 派发异步的事件：发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  console.log(longforInfo);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        { isEmptyObj(disCountInfo) && <HomeSectionV2 infoData={ disCountInfo } /> }
        { isEmptyObj(recommendInfo) && <HomeSectionV2 infoData={ recommendInfo } /> }

        { isEmptyObj(longforInfo) && <HomeLongFor infoData={ longforInfo } />}

        { isEmptyObj(goodPriceInfo) && <HomeSectionV1 infoData={ goodPriceInfo } /> }
        { isEmptyObj(highScoreInfo) && <HomeSectionV1 infoData={ highScoreInfo } /> }
        
      </div>


      
    </HomeWrapper>
  )
})

export default Home