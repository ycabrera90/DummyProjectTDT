import { useState } from 'react';
import './App.css'

function App() {
  const [screen, setScreen] = useState("dashboard");

  return (
    <div className="App">
      <header className='header'>
        <h1>TDT</h1>
        <h1>USER</h1>
      </header>
      <aside className='nav-bar'>
        <button onClick={()=> setScreen('dashboard')}>Dashboard</button>
        <button onClick={()=> setScreen('project')}>Projects</button>
      </aside>
      {screen === "dashboard" && <main className='body'>
        dashboard
      </main>}
      {screen === "project" && <main className='body'>
         project
      </main>}
     
      
    </div>
  )
}

export default App
