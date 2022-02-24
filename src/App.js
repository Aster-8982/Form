import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route  path="/addUser" element={<AddUser/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
