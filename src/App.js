import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
