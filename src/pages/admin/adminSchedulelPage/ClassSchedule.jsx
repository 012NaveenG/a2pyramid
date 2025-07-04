import React from 'react'
import Schedule from '../..//common/Schedules.jsx'
import { getSession } from '../../../api/users.js'

const ClassSchedule = () => {
  const user = getSession()
  return (
    <div className='h-screen'>
      <Schedule role={user.role}/>
    </div>
  )
}

export default ClassSchedule
