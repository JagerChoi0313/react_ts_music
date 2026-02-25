import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

// 修改为与 /banner 接口返回的数据结构匹配
export interface IBannerData {
  targetId: number
  bigImageUrl: string
  imageUrl: string
  targetType: number
  typeTitle: string
  scm: string
  url: string
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest.get({
      url: '/banner'  // 使用正确的轮播图接口
    }).then((res) => {
      setBanners(res.banners)  // 正确处理返回的数据结构
    })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default memo(Recommend)
