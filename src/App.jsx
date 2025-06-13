import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Travel Journal Phase
// import Header from './components/TravelJourrnal/Header'
// import Entry from './components/TravelJourrnal/Entry'
// import travelentry from '../Data/data.js';


// Static Phase
// import Navbar from './components/StaticPages/navbar'
// import MainContent from './components/StaticPages/maincontent'


// Dynamic Phase
import HeaderDiv from "./components/DyanamicPage/headerDiv";
import BodyDiv from "./components/DyanamicPage/bodyDiv";


export default function App(){
  return <> 
    <HeaderDiv />
    <BodyDiv />

  </>
}
