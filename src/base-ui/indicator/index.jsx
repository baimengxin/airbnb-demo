import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'

import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const contentRef = useRef()

  useEffect(() => {
    // 1. 获取 selectIndex 对应的 item
    const selectItemEl = contentRef.current.children[selectIndex]
    // 对应元素距离左侧的位置
    const selectItemLeft = selectItemEl.offsetLeft
    // 对应元素的宽度
    const selectItemWidth = selectItemEl.clientWidth

    // 2. content 的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // 3. 获取 selectIndex 的滚动距离
    // 对应元素距离左侧的位置 + 当前元素的宽度一半的距离 - 总盒子宽度的一半
    let distance = selectItemLeft + selectItemWidth * 0.5 - contentWidth * 0.5

    // 4. 特殊情况的处理
    // 左边的特殊情况处理，滚动为负数不移动
    if(distance < 0) distance = 0

    // 右边的特殊情况处理
    let totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance 

    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator