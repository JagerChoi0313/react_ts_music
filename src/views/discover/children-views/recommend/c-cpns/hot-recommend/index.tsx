import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {RecommendWrapper} from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import {useAppSelector} from '@/store'
import {shallowEqual} from 'react-redux'


interface IProps {
    children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
    const {hotRecommends}=useAppSelector(
        (state)=>({
            hotRecommends:state.recommend.hotRecommends
        }),shallowEqual
    )
    return (
    <RecommendWrapper>
        <AreaHeaderV1
        title="热门推荐"
        keywords={['华语','流行','摇滚','民谣','电子']}
        moreLink="/discover/songs"
        />

        <div className="hot-recommend">
            {
                hotRecommends.map((item)=>{
                    return(
                        <div className="item" key={item.id}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>
    </RecommendWrapper>)
}

export default memo(HotRecommend)
