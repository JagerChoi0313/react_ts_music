import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayerBarWrapper, BarControl, BarPlayerInfo, BarOperator } from './style'
import { Link } from "react-router-dom"
import { Slider } from 'antd'
import {
  CaretRightFilled,
  CustomerServiceOutlined,
  HeartOutlined,
  RetweetOutlined,
  SoundOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  UnorderedListOutlined
} from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = (props) => {
  return (
    <PlayerBarWrapper className="player">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn control-btn prev" aria-label="Previous track">
            <StepBackwardFilled />
          </button>
          <button className="btn control-btn play" aria-label="Play">
            <CaretRightFilled />
          </button>
          <button className="btn control-btn next" aria-label="Next track">
            <StepForwardFilled />
          </button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="img"
              src="https://p2.music.126.net/bkBg46eD1bS9D2mzxkKAnQ==/3395291910036707.jpg?param=34y34"
              alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">Butterfly</span>
              <span className="singer-name">David Tao</span>
            </div>
            <div className="progress">
              <Slider defaultValue={26} />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:32</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator>
          <div className="left">
            <button className="btn icon-btn" aria-label="Favorite">
              <HeartOutlined />
            </button>
            <button className="btn icon-btn" aria-label="Share">
              <RetweetOutlined />
            </button>
            <button className="btn icon-btn" aria-label="Sound effect">
              <CustomerServiceOutlined />
            </button>
          </div>
          <div className="right">
            <button className="btn icon-btn" aria-label="Volume">
              <SoundOutlined />
            </button>
            <span className="volume-count">0</span>
            <button className="btn playlist-btn" aria-label="Playlist">
              <UnorderedListOutlined />
              <span>List</span>
            </button>
          </div>
        </BarOperator>
      </div>
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
