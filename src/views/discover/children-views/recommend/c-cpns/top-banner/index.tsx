import React, { memo,useRef,ElementRef,useState } from 'react'
import type { FC, ReactNode } from 'react'
import {useAppSelector,shallowEqualApp} from '@/store'
import {BannerControl, BannerLeft, BannerRight, BannerWrapper} from './style'
import {Carousel} from 'antd'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
    //定义内部数据
    const [currentIndex,setCurrentIndex]=useState(0)
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

    function handleAfterChange(current:number){
        setCurrentIndex(current)
    }

    //轮播图的毛玻璃效果
    let bgImageUrl=banners[currentIndex]?.imageUrl
    if(bgImageUrl){
        bgImageUrl=bgImageUrl+'?imageView&blur=40x20'
    }
    console.log(bgImageUrl)

    return (
    <BannerWrapper style={{background:`url('${bgImageUrl}')center center / 6000px`
        }}>
        <div className="banner wrap-v2">
            <BannerLeft>
            <Carousel autoplay effect="fade" ref={bannerRef} afterChange={handleAfterChange}>
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
