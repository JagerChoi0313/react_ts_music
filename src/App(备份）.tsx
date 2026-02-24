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
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import {Button} from 'antd'

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
      <AppHeader/>
      <Suspense fallback="Loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter/>

      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br/>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>

       <Demo02 name="Choi" age={18}/>
      <h2>当前计数：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>修改Message</button>
    </div>
  )
}

export default App
