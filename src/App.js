import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./components/MainPage/MainPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
