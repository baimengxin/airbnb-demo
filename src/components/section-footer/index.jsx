import PropTypes from 'prop-types'
import React, { memo } from 'react'

import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { FooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const { name } = props

    let showMessage = "查看更多"
    if(name) {
        showMessage = `查看更多${name}房源`
    }

    // 事件处理逻辑 跳转页面
    const navigate = useNavigate()
    function moreClickHandle() {
        navigate('/entire')
    }


  return (
    <FooterWrapper color={ name ? '#00848A' : '#000' }>
        <div className="info" onClick={moreClickHandle}>
            <span className='text'>{ showMessage }</span>
            <IconMoreArrow />
        </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
    name: PropTypes.string
}

export default SectionFooter