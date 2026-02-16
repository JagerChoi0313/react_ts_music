import React from 'react'
import { useRoutes } from 'react-router-dom'
import {Link} from 'react-router-dom'
import routes from './router'
import {Suspense} from 'react'

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Link to="Discover">发现音乐</Link>
        <Link to="Mine">我的音乐</Link>
        <Link to="Focus">关注</Link>
        <Link to="Download">下载客户端</Link>
      </div>
      <Suspense fallback="Loading...">
      <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
