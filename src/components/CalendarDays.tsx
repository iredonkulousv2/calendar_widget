import { Day } from './Calendar'

interface CalendarDaysProps  {
  day: Date
  changeRange: (day:Day) => void
  idx: number
  startDay: Date
  endDay: Date
}


const CalendarDays = ({day, changeRange, idx,startDay,endDay} : CalendarDaysProps) => {

    const firstDayOfMonth = new Date(day.getFullYear(), day.getMonth() + idx, 1);
    const weekdayOfFirstDay = firstDayOfMonth.getDay();
    const currentMonth = firstDayOfMonth.getMonth()

    const currentDays = [];

    for (let i = 0; i < 42; i++) {
        if (i === 0 && weekdayOfFirstDay === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (i === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (i - weekdayOfFirstDay));
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }


        const calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === currentMonth),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          startSelected: (firstDayOfMonth.toDateString() === startDay.toDateString()),
          endSelected:(firstDayOfMonth.toDateString() === endDay.toDateString()),
          inRange: firstDayOfMonth.getTime() < endDay.getTime() && firstDayOfMonth.getTime() > startDay.getTime(),
          sunday: firstDayOfMonth.getDay() === 0,
          year: firstDayOfMonth.getFullYear()
        }


        currentDays.push(calendarDay);
      }

    return (
        <div className="table-content">
        {
          currentDays.map((day,) => {
            return (
             
              <div 
              key={`${day.month}${day.number}`}
              className={`calendar-day ${day.currentMonth ? 'current' : ''} ${day.startSelected ? 'selected' : ''} ${day.sunday ? 'sunday' : ''} ${day.endSelected ? 'selected' : ''} ${day.inRange && day.currentMonth ? 'inrange' : ''} ${(day.startSelected || day.endSelected) && day.currentMonth ? 'isselected' : ''}`}
              onClick={() => changeRange(day)}>
                <p className={(day.currentMonth ? "" : "hidden")}>{day.number}</p>
              
              </div>
              
            )
          })
        }
      </div>
    )
}

export default CalendarDays