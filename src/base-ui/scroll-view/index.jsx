import PropTypes from 'prop-types'
import React, { memo, useState, useEffect, useRef } from 'react'

import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
    // 定义内部的状态
    const [ showRight, setShowRight ] = useState(false)
    const [ posIndex, setPosIndex ] = useState(0)
    const totalDistanceRef = useRef()

    // 组件渲染完毕，判断是否显示右侧按钮
    const scrollContentRef = useRef()
    useEffect(()=> {
        // 一共可以滚动的宽度
        const scrollWidth = scrollContentRef.current.scrollWidth
        // 本身占据的宽度
        const clientWidth = scrollContentRef.current.clientWidth
        // 超出本身容器的宽度
        const totalDistance = scrollWidth - clientWidth
        // 大于0，表示可以滚动，显示右侧按钮
        setShowRight(totalDistance > 0)
        // 记录当前超出本身容器的宽度，只需一次
        totalDistanceRef.current = totalDistance
    }, [props.children])

    // 右侧按钮事件
    function rightClickHandle() {
        // 当前可视区域的第二个按钮索引
        const newIndex =  posIndex + 1
        // 当前可视区域的第二个按钮
        const newEl = scrollContentRef.current.children[newIndex]
        // 第二个按钮距离可视区域位置的左偏移量
        const newOffsetLeft = newEl.offsetLeft
        // 动画
        scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
        // 更新状态
        setPosIndex(newIndex)
        // 超出可视区域宽度 > 左偏移量，则隐藏右侧按钮
        setShowRight(totalDistanceRef > newOffsetLeft)
    }

  return (
    <ViewWrapper>
        <div>左边按钮</div>
        { showRight && <div onClick={ e => rightClickHandle()}>右边按钮</div> }

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