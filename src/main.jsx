import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './error-page.jsx'
import './index.css'

import { createBrowserRouter, Outlet, RouterProvider, Navigate } from "react-router-dom";
import { Root } from './routes/root.jsx'
import { Categories } from './components/Categories/Categories.jsx';
import { CategoryPage } from './pages/category-page.jsx';
import { ProductPage } from './pages/product-page.jsx';

import { CartProvider } from './providers/Cart.jsx'
import { CartPage } from './pages/cart-page.jsx';
import './swRegister.js';
import { DonatePage } from './pages/donate-page.jsx';

import { AuthProvider } from './providers/Auth.jsx';
import LoginPage from './pages/login-page.jsx';
import RegisterPage from './pages/register-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Root>
        <Outlet />
      </Root>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="categories" replace />
      },
      {
        path: 'categories',
        element: <Categories />
      },
      {
        path: 'categories/:id',
        element: <CategoryPage />
      },
      {
        path: 'product/:id',
        element: <ProductPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'donate',
        element: <DonatePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
