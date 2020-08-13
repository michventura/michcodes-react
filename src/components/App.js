import React from 'react'

function App() {
  return (
    <div className="app">
      <h2>Pomodoro App</h2>

      <div className="timer">
        <span>00</span>
        <span>:</span>
        <span>00</span>
      </div>

      <div className="buttons">
        {<button>Comienza</button> || <button>Pausa</button>}
        <button>Reset</button>
      </div>
    </div>
  )
}

export default App
