import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom'
//components
import Navbar from './components/navBar';
import Slide from './components/slide';
import Reccom from './components/recommmend';
import BestSell from './components/bestSell';
import Book from './components/book'
import { useState } from 'react';

function App() {
  const [number,setNumber] = useState(2);
  return (
    <Router>
      <div className="App">
        <Navbar number={number}/>
        <Route exact path="/">
          <Slide/>
          <BestSell/>
          <Reccom/>
        </Route>
        <Route exact path="/book">
          <Book set={setNumber} num={number}/>
        </Route>
        <Route exact path="/cart">

        </Route>
        <Route exact path="/purchase">

        </Route>
      </div>
    </Router>
  );
}

export default App;
