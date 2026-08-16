import './index.css'
import React from 'react'
const Guests = ({
  adults,
  children,
  infants,
  setAdults,
  setChildren,
  setInfants,
  onPrevious,
  onNext,
}) => {
  const updateCount = (setter, value, minimum) => {
    if (value >= minimum) setter(value)
  }

  const GuestRow = ({title, description, count, setter, minimum}) => (
    <div className="guest-row">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="counter">
        <button
          type="button"
          onClick={() => updateCount(setter, count - 1, minimum)}
          disabled={count === minimum}
          aria-label={`Decrease ${title}`}
        >
          −
        </button>

        <span>{count}</span>

        <button
          type="button"
          onClick={() => updateCount(setter, count + 1, minimum)}
          aria-label={`Increase ${title}`}
        >
          +
        </button>
      </div>
    </div>
  )

  return (
    <div className="guests-container">
      <h2>Guests</h2>
      <p className="guests-description">
        Select the number of people travelling with you.
      </p>

      <GuestRow
        title="Adults"
        description="Age 12 and above"
        count={adults}
        setter={setAdults}
        minimum={1}
      />

      <GuestRow
        title="Children"
        description="Age 2 - 11"
        count={children}
        setter={setChildren}
        minimum={0}
      />

      <GuestRow
        title="Infants"
        description="Below 2 years"
        count={infants}
        setter={setInfants}
        minimum={0}
      />

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

export default Guests