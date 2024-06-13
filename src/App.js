import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import SearchMovie from './components/SearchMovie';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddMovie/>}/>
      <Route path='/SearchMovie' element={<SearchMovie/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
