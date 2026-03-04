import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import {AnchorWrapper} from './style'
import {hotRadios} from '@/assets/data/local-data'
import AreaHeaderV2 from '@/components/area-header-v2'

interface IProps {
    children?: ReactNode
}

const HotAnchor: FC<IProps> = (props) => {
    return (
    <div>
        <AnchorWrapper>
        <AreaHeaderV2/>
        <div className="anchors">
                {
                    hotRadios.map((item)=>{
                        return(
                            <div className="item">
                               <a href="" className="image">
                                 <img src={item.picUrl} alt="" />
                               </a>
                                <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="position">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        </AnchorWrapper>
    </div>
    )
}

export default memo(HotAnchor)
