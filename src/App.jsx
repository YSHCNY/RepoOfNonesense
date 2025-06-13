import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/TravelJourrnal/Header'
import Entry from './components/TravelJourrnal/Entry'
import travelentry from '.././data.js';

// import Navbar from './components/StaticPages/navbar'
// import MainContent from './components/StaticPages/maincontent'




export default function App(){

  const countries = travelentry.map(entry =>{
    return(
      <Entry
        key={entry.id}
       entry={entry}
      />  
    )
  })


  return <> 
     <Header/>
      {countries}
  </>
}
