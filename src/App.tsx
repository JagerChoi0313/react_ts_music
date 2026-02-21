import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'



function App() {

  return (
    <div className="App">
      <AppHeader/>
      <Suspense fallback="Loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <AppFooter/>


    </div>
  )
}

export default App
