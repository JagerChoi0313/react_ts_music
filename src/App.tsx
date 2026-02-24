import { useRoutes } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import theme from './assets/theme'




function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppHeader />
        <Suspense fallback="Loading...">
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
        <AppFooter />
      </div>
    </ThemeProvider>
  )
}

export default App
