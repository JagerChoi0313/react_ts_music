import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .box {
    //三等分布局
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 20px;
    width: 690px;
    height: 472px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
    .add {
      flex: 1;
      height: 472px;
      border-right: 1px solid #d3d3d3;
      .bottom {
        width: 100%;
        height: 352px;
        ol {
          li {
            display: flex;
            align-items: center;
            color: #333;
            //前三个span字体为红色
            &:nth-child(1) span,
            &:nth-child(2) span,
            &:nth-child(3) span {
              color: #c10d0c;
            }
            // 斑马线效果
            &:nth-child(even) {
              background-color: #f4f4f4;
            }
            &:nth-child(odd) {
              background-color: #E8E8E8;
            }
            span {
              width: 35px;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size: 16px;
              color: #666;
            }
            .info {
              height: 32px;
              line-height: 32px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 12px;
              color: #000;
            }
          }
        }
      }
      .left {
        position: relative;
        .img {
          width: 80px;
          height: 80px;
          background: url(${new URL('@/assets/img/add.jpg', import.meta.url).href}) no-repeat;
          // 背景图铺满
          background-size: 100% 100%;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 80px;
          background-position: -145px -57px;
        }
      }

    }
    .new {
      flex: 1;
      height: 472px;
      border-right: 1px solid #d3d3d3;
            .bottom {
        width: 100%;
        height: 352px;
        ol {
          li {
            display: flex;
            align-items: center;
            color: #333;
            //前三个span字体为红色
            &:nth-child(1) span,
            &:nth-child(2) span,
            &:nth-child(3) span {
              color: #c10d0c;
            }
            &:nth-child(even) {
              background-color: #f4f4f4;
            }
            &:nth-child(odd) {
              background-color: #E8E8E8;
            }
            span {
              width: 35px;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size: 16px;
              color: #666;
            }
            .info {
              height: 32px;
              line-height: 32px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 12px;
              color: #000;
            }
          }
        }
      }
      .left {
        position: relative;
        .img {
          width: 80px;
          height: 80px;
          background: url(${new URL('@/assets/img/new.jpg', import.meta.url).href}) no-repeat;
          // 背景图铺满
          background-size: 100% 100%;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 80px;
          background-position: -145px -57px;
        }
      }
    }
    .original {
      flex: 1;
      height: 472px;
      border-right: 1px solid #d3d3d3;
            .bottom {
        width: 100%;
        height: 352px;
        ol {
          li {
            display: flex;
            align-items: center;
            color: #333;
            //前三个span字体为红色
            &:nth-child(1) span,
            &:nth-child(2) span,
            &:nth-child(3) span {
              color: #c10d0c;
            }
            &:nth-child(even) {
              background-color: #f4f4f4;
            }
            &:nth-child(odd) {
              background-color: #E8E8E8;
            }
            span {
              width: 35px;
              height: 32px;
              line-height: 32px;
              text-align: center;
              font-size: 16px;
              color: #666;
            }
            .info {
              height: 32px;
              line-height: 32px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 12px;
              color: #000;
            }
          }
        }
      }
      .left {
        position: relative;
        .img {
          width: 80px;
          height: 80px;
          background: url(${new URL('@/assets/img/origin.jpg', import.meta.url).href}) no-repeat;
          // 背景图铺满
          background-size: 100% 100%;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          height: 80px;
          background-position: -145px -57px;
        }
      }
    }
  }
  .top {
    display: flex;
    height: 105px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 10px;
  }
  a {
    display: inline-block;
    margin-top: 5px;
    margin-left: 10px;
    color: #333;
  }
  h3 {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
  }
  .icon {
      display: flex;
      .play {
        width: 22px;
        height: 22px;
        background-position: -267px -205px;
      }
      .collect {
        width: 22px;
        height: 22px;
        background-position: -300px -205px;
      }
  }
  .lookAll {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666;
  }
`
