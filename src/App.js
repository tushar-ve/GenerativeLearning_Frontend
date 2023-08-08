import {Route, Routes} from 'react-router-dom'
import './App.css';
// import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';
import Body from './Components/MainBody/Body';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
