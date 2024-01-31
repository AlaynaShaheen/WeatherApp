import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherApp from './components/WeatherApp/WeatherApp'
import Initial from './components/initial';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
     <main>
      <Routes>
      <Route path="/" element={<Initial/>} />
      <Route path='/weather' element={<WeatherApp/>} />
      </Routes>
     </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
