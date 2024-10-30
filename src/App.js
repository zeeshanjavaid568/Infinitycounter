import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grid from './components/Grid';
import DoubleButtonGrid from './components/DoubleButtonGrid.jsx';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Grid />} /> 
        <Route path='/doublebuttoncounter' element={<DoubleButtonGrid />} />
      </Routes>
    </div>
  );
}

export default App;
