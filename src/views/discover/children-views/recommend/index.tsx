import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'
import {RecommendWrapper} from './style'

interface IProps {
  children?: ReactNode
}

// 修改为与 /banner 接口返回的数据结构匹配
const Recommend: FC<IProps> = () => {

  //发起action获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  //render函数返回jsx
  return (
    <RecommendWrapper>
      <TopBanner/>
      <div className="wrap-v2">
      <div className="left">left</div>
      <div className="right">right</div>
      </div>

    </RecommendWrapper>
  )
}

export default memo(Recommend)
