import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { ErrorBoundary, OutLet, Home,Cart, CheckOut, ProductPage } from "./pages"


export default function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<OutLet/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
      </Route>
      <Route path="/product" element={<ProductPage/>} />
    </>

  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}