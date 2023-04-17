import React from 'react'

import CourseGoalItem from '../courseGoalItem/CourseGoalItem'
import './style.css'

const CourseGoalList = ({ items, onDeleteItem }) => {
  return (
    <ul className='goal-list'>
      {items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  )
}

export default CourseGoalList
