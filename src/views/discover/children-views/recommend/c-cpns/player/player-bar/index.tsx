import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import {
  CaretRightFilled,
  CustomerServiceOutlined,
  HeartOutlined,
  PauseOutlined,
  RetweetOutlined,
  SoundOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  UnorderedListOutlined
} from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatDuration, getImageSize } from '@/utils/format'
import {
  changeCurrentTimeAction,
  changeIsPlayingAction,
  changeLyricIndexAction,
  fetchCurrentSongAction,
  playNextSongAction,
  playPrevSongAction
} from '../store/player'
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isSliderChanging, setIsSliderChanging] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const dispatch = useAppDispatch()

  const {
    currentSong,
    songUrl,
    lyricList,
    lyricIndex,
    currentTime,
    duration,
    isPlaying
  } = useAppSelector((state) => ({
    currentSong: state.player.currentSong,
    songUrl: state.player.songUrl,
    lyricList: state.player.lyricList,
    lyricIndex: state.player.lyricIndex,
    currentTime: state.player.currentTime,
    duration: state.player.duration,
    isPlaying: state.player.isPlaying
  }))

  useEffect(() => {
    dispatch(fetchCurrentSongAction(386538))
  }, [dispatch])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (songUrl) {
      audio.src = songUrl
      if (isPlaying) {
        audio.play().catch(() => {
          dispatch(changeIsPlayingAction(false))
        })
      }
    } else {
      audio.pause()
    }
  }, [dispatch, isPlaying, songUrl])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !songUrl) return
    if (isPlaying) {
      audio.play().catch(() => {
        dispatch(changeIsPlayingAction(false))
      })
    } else {
      audio.pause()
    }
  }, [dispatch, isPlaying, songUrl])

  useEffect(() => {
    if (!duration || isSliderChanging) return
    setSliderValue((currentTime / duration) * 100)
  }, [currentTime, duration, isSliderChanging])

  const singerName = currentSong?.ar?.[0]?.name ?? ''
  const songName = currentSong?.name ?? ''
  const currentLyric = lyricList?.[lyricIndex]?.content ?? ''
  const coverUrl = currentSong?.al?.picUrl
    ? getImageSize(currentSong.al.picUrl, 50)
    : 'https://p2.music.126.net/bkBg46eD1bS9D2mzxkKAnQ==/3395291910036707.jpg?param=50y50'

  const handlePlayBtnClick = () => {
    if (!songUrl) {
      dispatch(fetchCurrentSongAction(386538))
      return
    }
    dispatch(changeIsPlayingAction(!isPlaying))
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    if (!audio) return
    const newCurrentTime = audio.currentTime * 1000
    dispatch(changeCurrentTimeAction(newCurrentTime))

    for (let i = 0; i < lyricList.length; i++) {
      const nextLyricTime = lyricList[i + 1]?.time ?? Number.MAX_SAFE_INTEGER
      if (newCurrentTime >= lyricList[i].time && newCurrentTime < nextLyricTime) {
        if (i !== lyricIndex) {
          dispatch(changeLyricIndexAction(i))
        }
        break
      }
    }
  }

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) return
    setIsSliderChanging(true)
    setSliderValue(value)
  }

  const handleSliderAfterChange = (value: number | number[]) => {
    if (Array.isArray(value)) return
    const audio = audioRef.current
    if (!audio || !duration) return

    const targetTime = (value / 100) * duration
    audio.currentTime = targetTime / 1000
    dispatch(changeCurrentTimeAction(targetTime))
    if (!isPlaying) {
      dispatch(changeIsPlayingAction(true))
    }
    setIsSliderChanging(false)
  }

  return (
    <PlayerBarWrapper className="player">
      <div className="content wrap-v2">
        <BarControl>
          <button className="btn control-btn prev" aria-label="Previous track" onClick={() => dispatch(playPrevSongAction())}>
            <StepBackwardFilled />
          </button>
          <button className="btn control-btn play" aria-label="Play" onClick={handlePlayBtnClick}>
            {isPlaying ? <PauseOutlined /> : <CaretRightFilled />}
          </button>
          <button className="btn control-btn next" aria-label="Next track" onClick={() => dispatch(playNextSongAction())}>
            <StepForwardFilled />
          </button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img className="img" src={coverUrl} alt="" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                value={sliderValue}
                onChange={handleSliderChange}
                onChangeComplete={handleSliderAfterChange}
              />
              <div className="time">
                <span className="current">{formatDuration(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatDuration(duration)}</span>
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
      <div className="lyric-line">{currentLyric}</div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={() => dispatch(playNextSongAction())} />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)

