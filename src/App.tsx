import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import theme from './assets/theme'
import AppPlayerBar from './views/discover/children-views/recommend/c-cpns/player/player-bar/index'




function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppHeader />
        <Suspense fallback="Loading...">
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
        <AppFooter />

        {/*播放器工具栏 */}
        <AppPlayerBar/>
      </div>
    </ThemeProvider>
  )
}

export default App
