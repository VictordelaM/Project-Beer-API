import './App.css'
import AllBeers from './pages/allBeers/AllBeers'
import Home from './pages/home/Home'
import RandomBeer from './pages/randomBeer/RandomBeer'
import SingleBeer from './pages/singleBeer/SingleBeer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/allbeers' element = {<AllBeers/>}/>
        <Route path= '/singlebeer' element = {<SingleBeer/>}/>
        <Route path= '/randombeer' element = {<RandomBeer/>}/>
        <Route path='/productlist/:dasIdVomUseParamUndDasKommtVomUrl' element={<ProductsDetails />} />
      </Routes>
    </>
  )
}

export default App
