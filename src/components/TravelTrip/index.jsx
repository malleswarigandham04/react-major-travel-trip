import React from 'react'
import {useState} from 'react'
import StepIndicator from '../StepIndicator/index.jsx'
import YourDetails from '../YourDetails/index.jsx'
import DateSelection from '../DateSelection/index.jsx'
import Guests from '../Guests/index.jsx'
import TravelAssistance from '../TravelAssistance/index.jsx'
import Confirmation from '../Confirmation/index.jsx'
import './index.css'

const TravelTrip = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const [name, setName] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const [assistanceNeeded, setAssistanceNeeded] = useState(false)
  const [assistance, setAssistance] = useState('')

  const [confirmed, setConfirmed] = useState(false)

  const steps = [
    {id: 1, displayText: 'Your Details'},
    {id: 2, displayText: 'Date Selection'},
    {id: 3, displayText: 'Guests'},
    {id: 4, displayText: 'Travel Assistance'},
    {id: 5, displayText: 'Confirmation'},
  ]

  const resetTrip = () => {
    setCurrentStep(1)
    setName('')
    setStartLocation('')
    setEndLocation('')
    setStartDate('')
    setEndDate('')
    setAdults(1)
    setChildren(0)
    setInfants(0)
    setAssistanceNeeded(false)
    setAssistance('')
    setConfirmed(false)
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  return (
    <main className="travel-trip-container">
      <section className="travel-trip-card">
        <h1 className="main-heading">Travel Trip</h1>

        {!confirmed && (
          <StepIndicator steps={steps} currentStep={currentStep} />
        )}

        {confirmed ? (
          <Confirmation
            name={name}
            startLocation={startLocation}
            endLocation={endLocation}
            startDate={startDate}
            endDate={endDate}
            adults={adults}
            children={children}
            infants={infants}
            assistanceNeeded={assistanceNeeded}
            assistance={assistance}
            onCancel={resetTrip}
            onBookNewTrip={resetTrip}
          />
        ) : (
          <>
            {currentStep === 1 && (
              <YourDetails
                name={name}
                startLocation={startLocation}
                endLocation={endLocation}
                setName={setName}
                setStartLocation={setStartLocation}
                setEndLocation={setEndLocation}
                onNext={() => setCurrentStep(2)}
              />
            )}

            {currentStep === 2 && (
              <DateSelection
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onPrevious={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <Guests
                adults={adults}
                children={children}
                infants={infants}
                setAdults={setAdults}
                setChildren={setChildren}
                setInfants={setInfants}
                onPrevious={() => setCurrentStep(2)}
                onNext={() => setCurrentStep(4)}
              />
            )}

            {currentStep === 4 && (
              <TravelAssistance
                assistanceNeeded={assistanceNeeded}
                setAssistanceNeeded={setAssistanceNeeded}
                assistance={assistance}
                setAssistance={setAssistance}
                onPrevious={() => setCurrentStep(3)}
                onNext={() => setCurrentStep(5)}
              />
            )}

            {currentStep === 5 && (
              <Confirmation
                name={name}
                startLocation={startLocation}
                endLocation={endLocation}
                startDate={startDate}
                endDate={endDate}
                adults={adults}
                children={children}
                infants={infants}
                assistanceNeeded={assistanceNeeded}
                assistance={assistance}
                onCancel={resetTrip}
                onConfirm={handleConfirm}
              />
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default TravelTrip