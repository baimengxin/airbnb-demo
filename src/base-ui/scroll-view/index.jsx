import PropTypes from 'prop-types'
import React, { memo, useState, useEffect, useRef } from 'react'

import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    // 定义内部的状态
    const [ showRight, setShowRight ] = useState(false)

    // 组件渲染完毕，判断是否显示右侧按钮
    const scrollContentRef = useRef()
    useEffect(()=> {
        // 一共可以滚动的宽度
        const scrollWidth = scrollContentRef.current.scrollWidth
        // 本身占据的宽度
        const clientWidth = scrollContentRef.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        // 大于0，表示可以滚动，显示右侧按钮
        setShowRight(totalDistance > 0)
    }, [props.children])

  return (
    <ViewWrapper>
        <div>左边按钮</div>
        { showRight && <div>右边按钮</div> }

        {/* 内容区域 */}
        <div className="scroll-content" ref={ scrollContentRef }>
            { props.children }
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {

}

export default ScrollView