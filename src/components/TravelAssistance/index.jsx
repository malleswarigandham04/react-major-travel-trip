import './index.css'
import React from 'react'
const TravelAssistance = ({
  assistanceNeeded,
  setAssistanceNeeded,
  assistance,
  setAssistance,
  onPrevious,
  onNext,
}) => {
  const handleCheckboxChange = event => {
    const checked = event.target.checked
    setAssistanceNeeded(checked)

    if (!checked) setAssistance('')
  }

  return (
    <div className="assistance-container">
      <h2>Travel Assistance</h2>

      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={assistanceNeeded}
          onChange={handleCheckboxChange}
        />
        <span>Travel Assistance Needed</span>
      </label>

      {assistanceNeeded && (
        <div className="assistance-select-container">
          <label htmlFor="assistance">Travel Assistance</label>
          <select
            id="assistance"
            value={assistance}
            onChange={event => setAssistance(event.target.value)}
          >
            <option value="">Select assistance</option>
            <option value="Wheelchair Assistance">
              Wheelchair Assistance
            </option>
            <option value="Airport Assistance">
              Airport Assistance
            </option>
            <option value="Special Medical Assistance">
              Special Medical Assistance
            </option>
          </select>
        </div>
      )}

      <div className="buttons-container">
        <button type="button" className="secondary-button" onClick={onPrevious}>
          Previous
        </button>
        <button type="button" className="primary-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default TravelAssistance