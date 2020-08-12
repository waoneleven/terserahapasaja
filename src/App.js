import React from 'react';
import Register from './Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Home from './Home';
/*import { Button } from 'semantic-ui-react';*/
import './App.css';
//import { register } from './serviceWorker';

function App() {
 return (
<Router>
     <Switch>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/register'>
         <Register/>
       </Route>
     </Switch>
   </Router>
 );
}

export default App;
