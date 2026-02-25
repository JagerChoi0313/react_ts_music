import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {useAppSelector,shallowEqualApp} from '@/store'

interface IProps {
    children?: ReactNode
}

const TopBanner: FC<IProps> = (props) => {
    //从store中获取数据
    const {banners} = useAppSelector((state)=>({
        banners:state.recommend.banners
    }),shallowEqualApp)
    return (
    <div>
        {banners.map((item)=>{
            return <div key={item.imageUrl}>{item.imageUrl}</div>
        })}
    </div>)
}

export default memo(TopBanner)
