import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate, Carousel } from 'antd';
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemWidth='25%', itemClick } = props
    const swiperRef = useRef()
    const [ selectIndex, setSelectIndex ] = useState(0)

    // 左右图标切换
    function controlClickHandle(isRight) {
        isRight ? swiperRef.current.next() : swiperRef.current.prev()

        // 指示器的索引切换
        let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
        const length = itemData.picture_urls.length
        if(newIndex < 0) newIndex = length - 1
        if(newIndex > length - 1) newIndex = 0
        setSelectIndex(newIndex)
    }

    function itemDataClick() {
        if(itemClick) itemClick()
    }

    // 子元素的赋值
    const pictureElement = (
        <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div>
    )

    const sliderElement = (
        <div className="slider">
            {/* 左右图标 */}
            <div className="control">
                <div className="btn left" onClick={e => controlClickHandle(false)}>
                    <IconArrowLeft width="24" height="24" />
                </div>
                <div className="btn right" onClick={e => controlClickHandle(true)}>
                    <IconArrowRight width="24" height="24" />
                </div>
            </div>

            {/* 指示器 */}
            <div className="indicator">
                <Indicator selectIndex={ selectIndex }>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="dot-item" key={item}>
                                    <span className={classNames("dot", {active: selectIndex === index})}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>

            {/* 轮播图组件 */}
            <Carousel dots={false} ref={swiperRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )

  return (
    <ItemWrapper 
        verifyColor={ itemData.verify_info.messages.text_color || "#39576a"} 
        itemWidth={ itemWidth }
        onClick={ itemDataClick }
    >
        <div className="inner">
            {
                !itemData.picture_urls ? pictureElement : sliderElement
            }
            

            <div className="desc">
                {
                    itemData.verify_info.messages.join(' · ')
                }
            </div>

            <div className='name'>{itemData.name}</div>
            <div className='price'>¥{itemData.price}/晚</div>

            <div className="bottom">
                <Rate disabled allowHalf defaultValue={ itemData.star_rating ?? 5 } 
                style={{fontSize: "12px", color: "#00848A"}} />

                <span className='count'>{ itemData.reviews_count }</span>
                {
                    itemData.bottom_info && <span className='extra'>· {itemData.bottom_info?.content}</span>
                }
            </div>
        </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem