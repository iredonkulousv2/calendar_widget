import { useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
import DateRange from './components/DateRange'

function App() {
  const [showCalendar,setShowCalendar] = useState<boolean>(true)
  const [maxRange,setMaxRange] = useState<number>(3)

  return (
      <>
      <div className='container'>
          <div className={`header-container ${!showCalendar ? 'to-center' : ''}`}>
            <h2>Travel For</h2>
            { !showCalendar &&   
              <DateRange 
                maxRange={maxRange} 
                setMaxRange={setMaxRange} />
            }
            <div className='toggle-container'>
              <label htmlFor='toggle' >
                <h4>Specific Date</h4>
              </label>
              <button className={`toggle-btn ${!showCalendar ? 'toggle-left to-center' : ''} `} onClick={() => setShowCalendar(!showCalendar)}>
                <div className={`circle ${showCalendar ? 'move-right' : ''}`}></div>
              </button>
            </div>
          </div>
        {showCalendar ? <Calendar maxRange={maxRange}/> : ''}
      </div>
    </>
  )
}

export default App
