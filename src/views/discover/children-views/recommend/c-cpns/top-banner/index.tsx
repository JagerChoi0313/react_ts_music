import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {useAppSelector,shallowEqualApp} from '@/store'
import {BannerControl, BannerLeft, BannerRight, BannerWrapper} from './style'
import {Carousel} from 'antd'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
    //从store中获取数据
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)
    return (
    <BannerWrapper>
        <div className="banner wrap-v2">
            <BannerLeft>
            <Carousel autoplay>
                    {
                    banners.map(item=>{
                        return(
                            <div className='banner-item' key={item.imageUrl}>
                                <img
                                className="image"
                                src={item.imageUrl}
                                alt={item.typeTitle}/>
                            </div>
                        )
                    })
                    }
            </Carousel>

        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
            <button className="btn left"></button>
            <button className="btn right"></button>
        </BannerControl>
        </div>
    </BannerWrapper>
    )
}

export default memo(TopBanner)
