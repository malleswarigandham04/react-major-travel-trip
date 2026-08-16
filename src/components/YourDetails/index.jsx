import {useState} from 'react'
import './index.css'
import React from 'react'
const YourDetails = ({
  name,
  startLocation,
  endLocation,
  setName,
  setStartLocation,
  setEndLocation,
  onNext,
}) => {
  const [nameError, setNameError] = useState('')
  const [startError, setStartError] = useState('')
  const [endError, setEndError] = useState('')

  const handleNext = () => {
    let valid = true

    if (name.trim() === '') {
      setNameError('Enter your name')
      valid = false
    } else {
      setNameError('')
    }

    if (startLocation.trim() === '') {
      setStartError('Enter your start location')
      valid = false
    } else {
      setStartError('')
    }

    if (endLocation.trim() === '') {
      setEndError('Enter your end location')
      valid = false
    } else {
      setEndError('')
    }

    if (valid) onNext()
  }

  return (
    <div className="form-container">
      <h2>Your Details</h2>
      <p className="form-description">
        Enter your travel details to get started.
      </p>

      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Enter your name"
        />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="startLocation">Start Location</label>
        <input
          id="startLocation"
          type="text"
          value={startLocation}
          onChange={event => setStartLocation(event.target.value)}
          placeholder="Enter start location"
        />
        {startError && <p className="error-message">{startError}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="endLocation">End Location</label>
        <input
          id="endLocation"
          type="text"
          value={endLocation}
          onChange={event => setEndLocation(event.target.value)}
          placeholder="Enter end location"
        />
        {endError && <p className="error-message">{endError}</p>}
      </div>

      <button type="button" className="primary-button" onClick={handleNext}>
        Next
      </button>
    </div>
  )
}

export default YourDetails