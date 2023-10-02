import './App.css';
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Listassignbooks from './Listassignbooks';
import Createbook from './Createbook';
import Editassignbooks from './Editassignbooks';
import Listbooks from './Listbooks';
import Createstudent from './Createstudent';
import Editbook from './Editbook';
import Liststudents from './Liststudents';
import Assignbooks from './Assignbooks';
import Editstudent from './Editstudent';
function App() {
    return (
    <div>
      
    <Routes>
        <Route path="/" element={ <Dashboard/> } />
        <Route path="Createstudent" element={ <Createstudent/> } />
        <Route path="Editstudent/:userId" element={ <Editstudent/> } />
        <Route path="Liststudents" element={ <Liststudents/> } />
        <Route path="Createbook" element={ <Createbook/> } />
        <Route path="Editbook/:userId" element={ <Editbook/> } />
        <Route path="Listbooks" element={ <Listbooks/> } />
        <Route path="Assignbooks" element={ <Assignbooks/> } />
        <Route path="Editassignbooks/:userId" element={ <Editassignbooks/> } />
        <Route path="Listassignbooks" element={ <Listassignbooks/> } />
      </Routes>
    </div>
  );
} 

export default App;