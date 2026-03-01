import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
    //定义内部数据
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    //点击事件处理函数
    function handlePrevClick() {
        bannerRef.current?.prev()
    }
    function handleNextClick() {
        bannerRef.current?.next()
    }
    return (
        <AlbumWrapper>
            <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
            <div className="content">
                <button className="sprite_02 arrow arrow-left"
                    onClick={handlePrevClick}>

                </button>
                <div className="banner">
                    <Carousel ref={bannerRef} dots={false} speed={1500}>
                        {
                            [1, 2].map((item) => {
                                return <h1 key={item}>{item}</h1>
                            })
                        }
                    </Carousel>
                </div>
                <button className="sprite_02 arrow arrow-right"
                    onClick={handleNextClick}>

                </button>
            </div>
            NewAlbum
        </AlbumWrapper>
    )
}

export default memo(NewAlbum)
