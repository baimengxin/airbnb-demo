import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/services'

const Home = memo(() => {
  const [data, setData] = useState({})

  useEffect(() => {
    hyRequest.get({url: '/home/highscore'}).then((res) => {
      console.log(res);
      setData(res)
    })
  }, [])

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      <ul>
        {
          data?.list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home