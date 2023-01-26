import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/UI/Footer';
import NewProduct from './components/NewProduct/NewProduct';
import ProductList from "./components/ProductList/ProductList";


const router = createBrowserRouter([
    {path: '/', element: <ProductList />},
    {path: '/add-product', element: <NewProduct />}
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
