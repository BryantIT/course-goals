import React, { useState } from 'react'

import Button from '../button/Button'
import './style.css'

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('')

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    onAddGoal(enteredValue)
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>Course Goal</label>
        <input type='text' onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  )
}

export default CourseInput
