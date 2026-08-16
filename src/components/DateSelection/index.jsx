import {useState} from 'react'
import './index.css'
import React from 'react'
const DateSelection = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onPrevious,
  onNext,
}) => {
  const [startError, setStartError] = useState('')
  const [endError, setEndError] = useState('')

  const handleNext = () => {
    let valid = true

    if (startDate === '') {
      setStartError('Select start date')
      valid = false
    } else {
      setStartError('')
    }

    if (endDate === '') {
      setEndError('Select end date')
      valid = false
    } else {
      setEndError('')
    }

    if (startDate !== '' && endDate !== '' && endDate < startDate) {
      setEndError('The end date cannot be less than the start date')
      valid = false
    }

    if (valid) onNext()
  }

  return (
    <div className="form-container">
      <h2>Date Selection</h2>

      <div className="date-input-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
        />
        {startError && <p className="error-message">{startError}</p>}
      </div>

      <div className="date-input-group">
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
        />
        {endError && <p className="error-message">{endError}</p>}
      </div>

      <div className="buttons-container">
        <button type="button" className="secondary-button" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" className="primary-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default DateSelection