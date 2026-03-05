import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 54px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 20%),
    linear-gradient(180deg, #3a3a3a 0%, #1e1e1e 40%, #111 100%);
  border-top: 1px solid #000;
  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.06), 0 -8px 25px rgba(0, 0, 0, 0.4);
  z-index: 999;

  .content {
    display: flex;
    align-items: center;
    gap: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: min(980px, calc(100vw - 20px));
    height: 53px;
    padding: 0 8px;
    box-sizing: border-box;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.32) 50%, transparent 100%);
  }

  @media (max-width: 1024px) {
    .content {
      gap: 12px;
      width: calc(100vw - 16px);
      padding: 0 6px;
    }
  }

  @media (max-width: 768px) {
    height: 50px;

    .content {
      height: 49px;
      gap: 8px;
      width: calc(100vw - 10px);
      padding: 0 4px;
    }
  }

  .lyric-line {
    position: absolute;
    right: 18px;
    bottom: 55px;
    max-width: 340px;
    min-height: 22px;
    line-height: 22px;
    padding: 0 10px;
    border-radius: 11px;
    font-size: 12px;
    color: #e9e9e9;
    background: rgba(0, 0, 0, 0.56);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 768px) {
    .lyric-line {
      right: 6px;
      left: 6px;
      max-width: none;
      bottom: 52px;
    }
  }
`

export const BarControl = styled.div`
  display: flex;
  align-items: center;
  width: 150px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c6c6c6;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    &:active {
      transform: translateY(1px) scale(0.98);
    }
  }

  .control-btn {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    font-size: 18px;

    &:hover {
      color: #fff;
      border-color: rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.08);
    }
  }

  .play {
    width: 38px;
    height: 38px;
    margin: 0 6px;
    font-size: 20px;
    color: #fff;
    border: 1px solid #7c7c7c;
    background:
      radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0) 50%),
      linear-gradient(180deg, #4d4d4d 0%, #222 100%);

    &:hover {
      border-color: #9b9b9b;
      background:
        radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 55%),
        linear-gradient(180deg, #595959 0%, #2a2a2a 100%);
    }
  }

  @media (max-width: 768px) {
    width: 116px;

    .control-btn {
      margin-right: 4px;
    }

    .play {
      width: 34px;
      height: 34px;
      margin: 0 4px;
      font-size: 18px;
    }
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;

  .img {
    width: 34px;
    height: 34px;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;
    border: 1px solid #1f1f1f;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06) inset;
    transition: transform 0.2s ease, filter 0.2s ease;

    &:hover {
      transform: translateY(-1px);
      filter: brightness(1.07);
    }
  }

  .info {
    flex: 1;
    min-width: 0;
    color: #a1a1a1;

    .song {
      height: 28px;
      line-height: 28px;
      color: #e1e1e1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .song-name {
        color: #e8e8e8;
        margin-right: 15px;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .singer-name {
        color: #9b9b9b; 
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .progress {
      display: flex;
      align-items: center;
      gap: 10px;

      .ant-slider {
        flex: 1;
        margin: 0;
      }

      .ant-slider .ant-slider-rail {
        height: 6px;
        border-radius: 999px;
        background: #2f2f2f;
      }

      .ant-slider .ant-slider-track {
        height: 6px;
        border-radius: 999px;
        background: linear-gradient(90deg, #c92727 0%, #ea3e3e 100%);
      }

      .ant-slider .ant-slider-handle::after {
        width: 10px;
        height: 10px;
        box-shadow:
          0 0 0 2px rgba(255, 255, 255, 0.22),
          0 0 8px rgba(255, 90, 90, 0.4);
      }

      .time {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #797979;

        .current {
          color: #a1a1a1;
        }

        .divider {
          margin: 0 3px;
        }

        .duration {
          color: #797979;
        }
      }
    }
  }
`

export const BarOperator = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a8a8a8;
    background: transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.08);
    }
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .icon-btn {
    width: 25px;
    height: 25px;
    font-size: 16px;
    margin-left: 2px;
  }

  .volume-count {
    font-size: 12px;
    color: #8e8e8e;
    margin: 0 6px 0 4px;
  }

  .playlist-btn {
    height: 24px;
    padding: 0 8px;
    border-radius: 11px;
    background: linear-gradient(180deg, #383838 0%, #232323 100%);
    color: #b7b7b7;
    border: 1px solid #111;
    font-size: 12px;

    span {
      margin-left: 5px;
    }
  }

  @media (max-width: 1024px) {
    width: 180px;

    .left .icon-btn:first-child {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: auto;

    .left {
      display: none;
    }

    .volume-count {
      display: none;
    }

    .playlist-btn span {
      display: none;
    }

    .playlist-btn {
      width: 28px;
      padding: 0;
    }
  }

  @media (max-width: 1024px) {
    .img {
      margin-right: 10px;
    }

    .info .progress .time {
      min-width: 72px;
    }
  }

  @media (max-width: 768px) {
    .img {
      display: none;
    }

    .info .song {
      height: 24px;
      line-height: 24px;
      font-size: 12px;
    }

    .info .song .singer-name {
      display: none;
    }

    .info .progress {
      gap: 6px;
    }

    .info .progress .time {
      min-width: 58px;
      font-size: 11px;
    }
  }
`
