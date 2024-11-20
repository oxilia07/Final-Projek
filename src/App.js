import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // Keep Home as it is
import Login from './components/Login';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage'; // Import the new LandingPage
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        {/* Landing Page Route (new) */}
        <Route path='/' element={<LandingPage />} />

        {/* Home Page Route */}
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/product/:id' element={<ProductDetail />} />
        {/* Login and Signup Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
