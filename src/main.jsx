import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './error-page.jsx'
import './index.css'

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Root } from './routes/root.jsx'
import { Categories } from './components/Categories/Categories.jsx';
import { CategoryPage } from './pages/category-page.jsx';
import { ProductPage } from './pages/product-page.jsx';

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
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
