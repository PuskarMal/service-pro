import Data from '@/shared/Data'
import React, { useState } from 'react'

function SelectRating() {
  const [selectedRating, setSelectedRating] = useState([]);
  const onSelectRating = (isChecked, value) => {
    if (isChecked)
      setSelectedRating([...selectedRating, value])
    else
      setSelectedRating(selectedRating.filter((n) => n !== value))
    console.log(selectedRating)
  }
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-lg mx-auto space-y-6 mt-[24px]">
      <h2 className='text-lg font-semibold text-gray-800'>Select Rating</h2>
      <div>
        {Data.RatingList.map((item, index) => (
          <div key={index} className='flex justify-between'>
            <label>{item.icon}</label>
            <input type="checkbox"
              onChange={(e) => onSelectRating(e.target.checked, item.name)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SelectRating