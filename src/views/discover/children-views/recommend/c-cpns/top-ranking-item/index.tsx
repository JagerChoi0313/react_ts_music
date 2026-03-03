import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {RankingItemWrapper} from './style'

interface IProps {
    children?: ReactNode
}

const TopRankingItem: FC<IProps> = (props) => {
    return (
    <RankingItemWrapper>
        TopRankingItem
    </RankingItemWrapper>)
}

export default memo(TopRankingItem)
