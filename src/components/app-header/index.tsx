import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {Link} from 'react-router-dom'

interface IProps {
    children?: ReactNode
}

const AppHeader: FC<IProps> = (props) => {
    return (
    <div className="Nav">
        <Link to="Discover">发现音乐</Link>
        <Link to="Mine">我的音乐</Link>
        <Link to="Focus">关注</Link>
        <Link to="Download">下载客户端</Link>
      </div>
      )
}

export default memo(AppHeader)
