import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {SingerWrapper} from './style'

interface IProps {
    children?: ReactNode
}

const SettleSinger: FC<IProps> = (props) => {
    return (
    <SingerWrapper>
        <div className="header">Header</div>
        SettleSinger
    </SingerWrapper>)
}

export default memo(SettleSinger)
