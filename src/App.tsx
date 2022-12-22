import { BrowserRouter, Route, Routes } from 'react-router-dom'
import style from './app.module.scss'
import Header from './components/header/Header'
import Categories from './pages/categories/Categories'
import Home from './pages/home/Home'

function App() {

  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Categories />} />
        </Routes>

        {/* <Categories/> */}
      </div>
    </BrowserRouter>
  )
}

export default App
