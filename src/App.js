import {Route, Routes} from 'react-router-dom'
import './App.css';
// import Navbar from './Components/Header/Navbar';
import Quiz from './Components/Quiz/Quiz';
import Body from './Components/MainBody/Body';
import Login from './Components/Login/Login';
import Signup from './Components/Registration/Signup';
// import { AuthProvider } from './Components/Context/AuthContext';
import PrivateRoute from './Components/Private/PrivateRoute';
import ProfileDetails from './Components/Editors/EditorDetails/ProfileDetails';
import SideNav from './Work_trail/SideNav';

function App() {
  return (
    <div className="App">
  
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route element={<PrivateRoute />}><Route path='/quiz' element={<Quiz/>}/></Route>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/profiles' element={<ProfileDetails/>}/>
      <Route path='/side' element={<SideNav/>}/>
      
    </Routes>
   
    </div>
  );
}

export default App;
