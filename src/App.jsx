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
        <Route path= '/allBeers' element = {<AllBeers/>}/>
        <Route path= '/singleBeer' element = {<SingleBeer/>}/>
        <Route path= '/randomBeer' element = {<RandomBeer/>}/>
      </Routes>
    </>
  )
}

export default App
