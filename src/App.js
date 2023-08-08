import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';
import Signup from './Components/Registration/Signup.jsx';
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>

    </div>
  );
}

export default App;
