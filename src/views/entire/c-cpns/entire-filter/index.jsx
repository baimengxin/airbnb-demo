import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
    const [selectItems, setSelectItems] = useState([])

    function selectItemHandle(item) {
        const newItems = [...selectItems]
        // 判断当前点击按钮是否已经被选中
        if(newItems.includes(item)) {   
            // 已选中，那就移除数组对应的元素
            const index = newItems.findIndex(name => item === name)
            newItems.splice(index, 1)
        } else {
            // 未选中
            newItems.push(item)
        }
        setSelectItems(newItems)
    } 

  return (
    <FilterWrapper>
        <div className="filter">
            {
                filterData.map((item, index) => {
                    return (
                        <div className={classNames('item', {active: selectItems.includes(item)})} key={item} onClick={e => selectItemHandle(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter