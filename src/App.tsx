import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import { shallowEqual } from 'react-redux'
import {IRootState} from './store'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {changeMessageAction} from './store/modules/counter'
import Demo02 from './views/demo/demo02'

// type GetStateFnType =typeof store.getState
// type IRootState =ReturnType<GetStateFnType>

function App() {

  const {count,message}=useSelector((state:IRootState)=>({
    count:state.counter.count,
    message:state.counter.message
  }),shallowEqual)

  //动态推导state类型
  // const { count, message } = useAppSelector((state) => ({
  //   count: state.counter.count,
  //   message: state.counter.message
  // }), shallowEqual)



  //事件处理函数
  const dispatch=useDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('哈哈哈哈哈'))
  }

  return (
    <div className="App">
      <div className="Nav">
        <Demo02 name="Choi" age={18}/>
        <Link to="Discover">发现音乐</Link>
        <Link to="Mine">我的音乐</Link>
        <Link to="Focus">关注</Link>
        <Link to="Download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>修改Message</button>
      <Suspense fallback="Loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
