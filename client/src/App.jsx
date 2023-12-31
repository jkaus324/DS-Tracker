import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


function App () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;