import './index.css'
import React from 'react'
const StepIndicator = ({steps, currentStep}) => (
  <div className="steps-container">
    {steps.map((step, index) => {
      const isCompleted = step.id < currentStep
      const isActive = step.id === currentStep

      return (
        <div className="step-item" key={step.id}>
          <div
            className={`step-circle ${
              isCompleted ? 'completed' : isActive ? 'active' : ''
            }`}
          >
            {isCompleted ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                alt={step.displayText}
                className="completed-image"
              />
            ) : (
              step.id
            )}
          </div>

          <p className={`step-name ${isActive ? 'active-text' : ''}`}>
            {step.displayText}
          </p>

          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                isCompleted ? 'completed-line' : ''
              }`}
            />
          )}
        </div>
      )
    })}
  </div>
)

export default StepIndicator