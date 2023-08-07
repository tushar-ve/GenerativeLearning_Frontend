import {Route, Routes} from 'react-router-dom'
import './App.css';
// import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';
import Body from './Components/MainBody/Body';

function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
