//import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Footer from './components/UI/Footer';
import NewProduct from './components/NewProduct/NewProduct';
import ProductList from "./components/ProductList/ProductList";


// const router = createBrowserRouter([
//     {path: '/', element: <ProductList />},
//     {path: '/add-product', element: <NewProduct />}
// ]);

function App() {

  return (
    <>
      <Router>
          <Switch>
              <Route path='/products_assignment' exact component={ProductList}/>
              <Route path='/products_assignment/add-product' exact component={NewProduct}/>
          </Switch>
      </Router>

      {/* <RouterProvider router={router} /> */}
      <Footer />
    </>
  );
}

export default App;
