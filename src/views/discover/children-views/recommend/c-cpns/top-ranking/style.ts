import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .box {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 20px;
    width: 690px;
    height: 472px;
    border: 1px solid #d3d3d3;
    background-color: #f5f5f5;
  }

  .add, .new, .original {
    flex: 1;
    height: 472px;
    border-right: 1px solid #d3d3d3;
    
    &:last-child {
      border-right: none;
    }
    
    .left {
      .img {
        width: 80px;
        height: 80px;
        display: block;
        background-size: 100% 100%;
      }
    }
  }
  
  .add .left .img {
    background: url(${new URL('@/assets/img/add.jpg', import.meta.url).href}) no-repeat;
  }
  
  .new .left .img {
    background: url(${new URL('@/assets/img/new.jpg', import.meta.url).href}) no-repeat;
  }
  
  .original .left .img {
    background: url(${new URL('@/assets/img/origin.jpg', import.meta.url).href}) no-repeat;
  }

  .top {
    display: flex;
    height: 120px;
    padding: 20px 20px 0;
  }

  .left {
    position: relative;
    margin-right: 10px;
    
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 80px;
      height: 80px;
      background-position: -145px -57px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
    }
    
    .icon {
      display: flex;
      gap: 8px;
      
      .play, .collect {
        width: 22px;
        height: 22px;
        background-position: -267px -205px;
        
        &:hover {
          background-position: -267px -235px;
        }
      }
      
      .collect {
        background-position: -300px -205px;
        
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: 352px;
    
    ol {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        display: flex;
        align-items: center;
        height: 32px;
        line-height: 32px;
        padding: 0 10px;
        color: #333;
        
        &:nth-child(-n+3) span {
          color: #c10d0c;
          font-weight: bold;
        }
        
        &:nth-child(even) {
          background-color: #f4f4f4;
        }
        
        &:nth-child(odd) {
          background-color: #e8e8e8;
        }
        
        span {
          width: 35px;
          text-align: center;
          font-size: 16px;
          color: #666;
        }
        
        .info {
          flex: 1;
          height: 32px;
          line-height: 32px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
          color: #000;
          
          .name {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 100%;
            cursor: pointer;
          }
        }
        
        &:hover .info .name {
          text-decoration: underline;
        }
      }
    }
  }
`
