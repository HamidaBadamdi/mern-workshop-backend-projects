import react from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddProduct from './AddProduct';
import Display from './Display';
import './App.css';


function App()
{

    return(<>
    
    <Router>
        <nav className="simple-nav">
                <Link to='/add' className="simple-link">+Add</Link>
                <span className="nav-divider">|</span> 
                <Link to='/display' className="simple-link">Display</Link>
            </nav>
    
    
        <Routes>
            <Route path='/' element={<Display/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/display' element={<Display/>}/>
        </Routes>
            
               
    </Router>
    </>);

}export default App;

