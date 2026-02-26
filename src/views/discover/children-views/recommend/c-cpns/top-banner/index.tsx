import React, { memo,useRef,ElementRef } from 'react'
import type { FC, ReactNode } from 'react'
import {useAppSelector,shallowEqualApp} from '@/store'
import {BannerControl, BannerLeft, BannerRight, BannerWrapper} from './style'
import {Carousel} from 'antd'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
    //定义内部数据
    const bannerRef=useRef<ElementRef<typeof Carousel>>(null)

    //从store中获取数据
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)

    //事件处理函数
    function handlePrevClick(){
        bannerRef.current?.prev()
    }
    function handleNextClick(){
        bannerRef.current?.next()
    }

    return (
    <BannerWrapper>
        <div className="banner wrap-v2">
            <BannerLeft>
            <Carousel autoplay ref={bannerRef}>
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
            <button className="btn left" onClick={handlePrevClick}></button>
            <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
        </div>
    </BannerWrapper>
    )
}

export default memo(TopBanner)
