import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import "../src/components/css.css"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
    </div>
    <Footer/>

    </BrowserRouter>

  );
}

export default App;
