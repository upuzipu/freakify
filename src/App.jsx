import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import EmptyPage from "./components/EmptyPage/EmptyPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/main" element={<MainPage username={null}/>}/>
                    <Route path="*" element={<EmptyPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
