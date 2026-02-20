import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {

  // ✅ 必须写在最外层
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest.get({
      url: '/banner'
    }).then((res) => {
      setBanners(res.banners)
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
