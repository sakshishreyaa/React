import React from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Address from './components/Pages/Address';
import Client from './components/Pages/Client';
import Home from './components/Pages/Home';
import Products from './components/Pages/Products';
import Historyy from './components/Pages/Historyy';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/products' exact component={Products}/>
         <Route path='/client' exact component={Client}/>
         <Route path='/address' exact component={Address}/>
         <Route path='/history' exact component={Historyy}/>
         


        </Switch>
      </Router>
    </div>
  );
}

export default App;
