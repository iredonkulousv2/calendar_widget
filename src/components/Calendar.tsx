import  { useState } from 'react'
import CalendarDays from './CalendarDays';
import './calendar.css'

interface CalendarProps {
    maxRange: number
}

export interface Day {
    currentMonth: boolean
    date: Date
    month: number
    number: number
    startSelected: boolean
    endSelected: boolean
    inRange: boolean
    sunday: boolean
    year: number
}


const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December'];


const Calendar = ({maxRange} :CalendarProps ) => {

    const currentDay = new Date()
    const [startDay,setStartDay] = useState<Date>(new Date())
    const [endDay,setEndDay] = useState<Date>(new Date())


    const changeRange = (day: Day) => {
        const clickedDay = new Date(day.year, day.month, day.number)
        clickedDay.setHours(0, 0, 0, 0);
        const clickedNumerical = clickedDay.getTime();
        startDay.setHours(0,0,0,0)
        const startNumerical = startDay.getTime()

        const range = maxRange *  24 * 60 * 60 * 1000

        if(clickedNumerical - startNumerical <= range && clickedNumerical - startNumerical >= 0){
            setEndDay(clickedDay)
        } else {
            setStartDay(clickedDay)
            setEndDay(clickedDay)
        }

    }

  return (
    <div className='calendar-container'>
        <div className="table-header" style={{display: 'flex'}}>
            { weekdays.map((weekday,idx) => (
                <div className={`${weekday === 'S' && idx === 0 ? 'sunday' : ''} weekday`}>
                    <p>{weekday}</p>
                </div>
                ))
            }
        </div>
        <div className="calendar">
        {Array.from({length: 6}).map((_,idx) => (
            <>
                <div className="calendar-header">
                    <h2>{months[currentDay.getMonth() + idx ]} {currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar-body">
                    <div className="table">
                        <CalendarDays 
                            day={currentDay} 
                            changeRange={changeRange} 
                            idx={idx}
                            startDay={startDay}
                            endDay={endDay}
                            />
                    </div>
                </div>
             </>
        ))}
        </div>
    </div>
  )
}

export default Calendar