import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';
import Signin from './component/Signin/Signin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/login' element={<Signin></Signin>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
