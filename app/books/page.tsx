import React from 'react'
import Books from './Books'
import SearchBook from './SearchBook'

const page = () => {
  return (

    <div className="flex">
    <div className="w-1/4">
      <SearchBook />
    </div>
    <div className="w-3/4">
     <Books/>
    </div>
   </div>

  )
}

export default page