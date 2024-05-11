import './dateRange.css'

interface DateRangeProps {
  maxRange: number
  setMaxRange: (num:number) => void
} 

const DateRange = ({maxRange,setMaxRange} : DateRangeProps) => {

    const handleDecrease = () => {
        if(maxRange === 1) return
        setMaxRange(maxRange - 1)
    }

    const handleIncrease = () => {
        if(maxRange === 7) return
        setMaxRange(maxRange + 1)
    }

  return (
    <div className='dateRange-container'>
        <button className="operation-button" onClick={handleDecrease}>-</button>
        <span>{maxRange}</span>
        <button className="operation-button" onClick={handleIncrease}>+</button>
        <span> Days</span>
    </div>
             
  )
}

export default DateRange