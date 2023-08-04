import './App.css'
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Questionnaire from "./pages/Questionnaire";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Login/>}/>
                <Route path="/q" element={<Questionnaire/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
