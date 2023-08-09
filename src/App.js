import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';
import Signup from './Components/Registration/Signup.jsx';
import Sidebar from './Components/Sidebar/Sidebar';
import Body from '../src/Components/MainBody/Body'
import Footer from './Components/Footer/footer';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/navbar' element={<Navbar />} />

      </Routes>


    </div>
  );
}

export default App;
