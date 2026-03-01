import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {AlbumWrapper} from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
    children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
    return (
    <AlbumWrapper>
        <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"/>
        <div className="content">
        <button className="sprite_02 arrow arrow-left"></button>
        <button className="sprite_02 arrow arrow-right"></button>
        </div>
        NewAlbum
    </AlbumWrapper>
    )
}

export default memo(NewAlbum)
