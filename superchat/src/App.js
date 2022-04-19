import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Home from './page/Home';
import Navbar from './components/Navbar';
import SignUpModal from './components/SignUpModal';
import Private from './page/Private/Private';
import PrivateHome from './page/Private/PrivateHome/PrivateHome';
import SignInModal from './components/SignInModal';
function App() {
  return (
    <>
        <SignUpModal/>
        <SignInModal/>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/private' element={<Private/>}>
              <Route path='/private/private-home' element={<PrivateHome/>}></Route>
            </Route>
        </Routes>
    </>
  );
}
export default App;
