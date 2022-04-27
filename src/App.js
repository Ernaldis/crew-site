import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

const Home = lazy(() => import('./pages/Home/Home'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

const NavBar = lazy(() => import('./components/Navbar/Navbar'))
// const Loading = lazy(() => import('./components/Loading/Loading'));
const FourOFour = lazy(() => import('./components/404/FourOFour'))

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  )
}

export default App
