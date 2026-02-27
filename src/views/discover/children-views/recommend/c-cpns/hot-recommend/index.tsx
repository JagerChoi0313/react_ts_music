import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {RecommendWrapper} from './style'
import AreaHeaderV1 from '@/components/area-header-v1'

interface IProps {
    children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
    return (
    <RecommendWrapper>
        <AreaHeaderV1/>
    </RecommendWrapper>)
}

export default memo(HotRecommend)
