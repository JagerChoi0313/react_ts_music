import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {SingerWrapper} from './style'
import AreaHeaderV2 from '@/components/area-header-v2'

interface IProps {
    children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
    return (
    <SingerWrapper>
        <AreaHeaderV2 title="入驻歌手" moreText="查看全部&gt;"  moreLink="#/discover/artist"/>
        SettleSinger
    </SingerWrapper>)
}

export default memo(SettleSinger)
