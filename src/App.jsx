import { BrowserRouter, Routes, Route } from 'react-router-dom';

// contexts
import { UserContextProvider } from './contexts/UserContext';

// layout
import DefaultLayout from './layouts/DefaultLayout';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
