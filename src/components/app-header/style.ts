import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height:5px;
    background-color:#c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;//隐藏文字
    }
    .title-list {
    display: flex;
    height: 70px;
    list-style: none;
    margin: 0;
    padding: 0;
    .item {
      position: relative;
      white-space: nowrap; /* 防止文字换行 */

      a {
        display: block;
        padding: 0 20px;
        line-height: 70px;
        color: #ccc;
        transition: all 0.3s;
        white-space: nowrap; /* 防止文字换行 */
      }
      /* 当前选中项样式 */
      &.active {
        a {
          color: #c20c0c;
        }
      }
      /* 鼠标经过样式 */
      &:hover {
        background-color: #000;
        a {
          color: #fff;
        }

      }
         .active {
         color: #fff;
         background-color: #000;
        }
         .active .icon {
          position: absolute;
          display: inline-block;
          right: -10px;
          width: 12px;
          height: 7px;
          bottom: -1px;
          left: 50%;
          transform: translate(-50%,0);
          background-position: -226px 0;
        }
      /* 下载客户端特殊样式 */
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  > .input {
    input {
      width: 158px;
      height: 32px;
      border-radius: 16px;
      font-size: 12px;

      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
    color: #fff;
    cursor: pointer;
  }
`
