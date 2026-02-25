import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

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
    <div>
      <TopBanner/>
      Recommand
    </div>
  )
}

export default memo(Recommend)
