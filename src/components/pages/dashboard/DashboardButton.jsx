import React from 'react'
import { Link } from 'react-router-dom'

export const DashboardButton = () => {
  return (
    <Link to='/dashboard' className='bg-white-300 text-white hover:bg-purple-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>Admin</Link>
  )
}
