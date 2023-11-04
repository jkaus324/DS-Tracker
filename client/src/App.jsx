import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import Header from './components/Header';


function App () {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;