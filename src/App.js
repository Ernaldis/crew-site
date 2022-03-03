import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const Home = lazy(() => import('./pages/Home/Home'));

const NavBar = lazy(() => import('./components/Navbar/Navbar'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<>...</>}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
