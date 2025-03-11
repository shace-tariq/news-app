import './App.css';
import React, { Component } from 'react'
import NavBar from './geo_components/NavBar';
import News from './geo_components/News';
 
 export default class App extends Component {
   render() {
     return (
       <div>
         <NavBar/>
         <News/>
       </div>
     )
   }
 }
 