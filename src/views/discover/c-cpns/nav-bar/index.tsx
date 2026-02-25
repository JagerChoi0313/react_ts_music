import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavWrapper } from './style'
import {NavLink} from 'react-router-dom'
import {discoverMenu} from '@/assets/data/local-data'

interface IProps {
    children?: ReactNode
}

const NavBar: FC<IProps> = (props) => {
    return (
        <NavWrapper>
            <div className="nav wrap-v1">
                {
                discoverMenu.map(item=>{
                    return (
                        <div className="item" key={item.link}>
                            <NavLink to={item.link}>
                                {item.title}
                            </NavLink>
                        </div>
                    )
                })
            }
            </div>
        </NavWrapper>
    )
}

export default memo(NavBar)
