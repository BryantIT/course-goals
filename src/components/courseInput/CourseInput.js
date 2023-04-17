import React, { useState } from 'react'

import Button from '../button/Button'
import './style.css'

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
    if (enteredValue.trim().length > 0) {
      setIsValid(true)
    }
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return
    }
    setIsValid(true)
    onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
        type='text' 
        onChange={goalInputChangeHandler}
         />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default CourseInput
