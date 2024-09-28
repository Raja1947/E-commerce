import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from '../src/component/Hero/Hero.jsx';
import About from '../src/component/About/About.jsx';
import Contact from '../src/component/Contact/Contact.jsx';
import Blog from '../src/component/Blog/Blog.jsx';
import Product from '../src/component/Product/Product.jsx'
import Empty from './component/EmptyCart/Empty.jsx'
import Cart from './component/Cart/Cart.jsx'





const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Hero/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="blog" element={<Blog/>}/>
      <Route path="empty" element={<Empty/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
