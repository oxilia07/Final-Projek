import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        {/* Protected route for Home */}
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Login and Signup routes */}
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* Dynamic route for product details */}
        <Route path='/product/:id' element={<ProductDetail />} />
        {/* Add the ProductDetail route */}
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
