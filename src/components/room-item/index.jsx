import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { Rate, Carousel } from 'antd';
import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const RoomItem = memo((props) => {
    const { itemData, itemWidth='25%' } = props
    const swiperRef = useRef()

    // 左右图标切换
    function controlClickHandle(isRight) {
        isRight ? swiperRef.current.next() : swiperRef.current.prev()
    }

  return (
    <ItemWrapper 
        verifyColor={ itemData.verify_info.messages.text_color || "#39576a"} 
        itemWidth={ itemWidth }
    >
        <div className="inner">
            {/* <div className="cover">
                <img src={itemData.picture_url} alt="" />
            </div> */}
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