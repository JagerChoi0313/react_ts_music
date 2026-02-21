import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const AppFooter: FC<IProps> = (props) => {
    return (<div>Appfooter的组件搭建</div>)
}

export default memo(AppFooter)
