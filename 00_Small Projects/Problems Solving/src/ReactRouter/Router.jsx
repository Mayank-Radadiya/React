import React from 'react'
import { BrowserRouter, Route, Routes , Link} from 'react-router-dom'
import HomeRouter from './HomeRouter'
import AboutRouter from './AboutRouter'
import Contact from './Contact'

function Router() {
  return (
    <BrowserRouter>
    <nav className=' text-white'>
        <ul className=' flex text-pink-500 text-2xl gap-5 m-10'>
            <li>
                <Link to = '/' > Home</Link>
            </li>
            <li>
                <Link to = '/about' > About</Link>
            </li>
            <li>
                <Link to = '/contact' > Contact</Link>
            </li>
        </ul>
    </nav>

    <Routes >
        <Route path='/' element= {<HomeRouter/>} ></Route>
        <Route path='/about' element= {<AboutRouter />} ></Route>
        <Route path='/contact' element= {<Contact/>} ></Route>


    </Routes>
    
    </BrowserRouter>
  )
}

export default Router
