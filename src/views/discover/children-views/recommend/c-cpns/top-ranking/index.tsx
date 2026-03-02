import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {RankingWrapper} from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {

    children?: ReactNode
}


const TopRanking: FC<IProps> = (props) => {
    return (
    <RankingWrapper>
        <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"/>
        <div className="content">
            
        </div>
    </RankingWrapper>)
}

export default memo(TopRanking)
