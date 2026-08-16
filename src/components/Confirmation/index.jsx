import './index.css'
import React from 'react'
const Confirmation = ({
  name,
  startLocation,
  endLocation,
  startDate,
  endDate,
  adults,
  children,
  infants,
  assistanceNeeded,
  assistance,
  onPrevious,
  onConfirm,
  onCancel,
  onBookNewTrip,
}) => {
  if (onConfirm) {
    return (
      <div className="confirmation-container">
        <h2>Confirmation</h2>

        <div className="details-card">
          <h3>Your Details</h3>
          <div className="detail-row">
            <span>Name</span>
            <strong>{name}</strong>
          </div>
          <div className="detail-row">
            <span>Start Location</span>
            <strong>{startLocation}</strong>
          </div>
          <div className="detail-row">
            <span>End Location</span>
            <strong>{endLocation}</strong>
          </div>

          <h3>Date Selection</h3>
          <div className="detail-row">
            <span>Start Date</span>
            <strong>{startDate}</strong>
          </div>
          <div className="detail-row">
            <span>End Date</span>
            <strong>{endDate}</strong>
          </div>

          <h3>Guests</h3>
          <div className="detail-row">
            <span>Adults</span>
            <strong>{adults}</strong>
          </div>
          <div className="detail-row">
            <span>Children</span>
            <strong>{children}</strong>
          </div>
          <div className="detail-row">
            <span>Infants</span>
            <strong>{infants}</strong>
          </div>

          <h3>Travel Assistance</h3>
          <div className="detail-row">
            <span>Assistance Needed</span>
            <strong>{assistanceNeeded ? 'Yes' : 'No'}</strong>
          </div>
          {assistanceNeeded && (
            <div className="detail-row">
              <span>Assistance</span>
              <strong>{assistance || 'Not selected'}</strong>
            </div>
          )}
        </div>

        <div className="confirmation-actions">
          <button type="button" className="secondary-button" onClick={onPrevious}>
            Previous
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="primary-button" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="confirmation-container">
      <div className="success-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
          alt="success"
          className="success-image"
        />
        <h2>Trip Confirmed!</h2>
        <p>Your trip has been successfully booked.</p>
      </div>

      <div className="details-card">
        <h3>Your Details</h3>
        <div className="detail-row">
          <span>Name</span>
          <strong>{name}</strong>
        </div>
        <div className="detail-row">
          <span>Start Location</span>
          <strong>{startLocation}</strong>
        </div>
        <div className="detail-row">
          <span>End Location</span>
          <strong>{endLocation}</strong>
        </div>

        <h3>Date Selection</h3>
        <div className="detail-row">
          <span>Start Date</span>
          <strong>{startDate}</strong>
        </div>
        <div className="detail-row">
          <span>End Date</span>
          <strong>{endDate}</strong>
        </div>

        <h3>Guests</h3>
        <div className="detail-row">
          <span>Adults</span>
          <strong>{adults}</strong>
        </div>
        <div className="detail-row">
          <span>Children</span>
          <strong>{children}</strong>
        </div>
        <div className="detail-row">
          <span>Infants</span>
          <strong>{infants}</strong>
        </div>

        <h3>Travel Assistance</h3>
        <div className="detail-row">
          <span>Assistance Needed</span>
          <strong>{assistanceNeeded ? 'Yes' : 'No'}</strong>
        </div>
        {assistanceNeeded && (
          <div className="detail-row">
            <span>Assistance</span>
            <strong>{assistance || 'Not selected'}</strong>
          </div>
        )}
      </div>

      <button type="button" className="new-trip-button" onClick={onBookNewTrip}>
        Book New Trip
      </button>
    </div>
  )
}

export default Confirmation