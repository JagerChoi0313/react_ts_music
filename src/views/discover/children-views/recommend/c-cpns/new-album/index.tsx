import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import { Carousel } from 'antd'
import AreaHeaderV1 from '@/components/area-header-v1'
import {useAppSelector} from '@/store'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
    //定义内部数据
    const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

    //从redux中获取数据
    const newAlbums=useAppSelector(
        (state)=>state.recommend.newAlbums
    )
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
                            [0,1].map((item) => {
                                return (
                                    <div className="album-list" key={item}>
                                        {
                                            newAlbums.slice(item*5,(item+1)*5).map((album)=>{
                                                return <div key={album.id}>{album.name}</div>
                                            })
                                        }
                                    </div>
                                )
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
