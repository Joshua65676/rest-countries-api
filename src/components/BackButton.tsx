import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

const BackButton: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>
         <div className="flex w-24 h-8 border-white rounded-md shadow space-x- boder bg-White dark:bg-DarkBlue dark:border-DarkBlue">
            <div className='ml-2'>
                <IoIosArrowRoundBack className='w-8 h-8 font-medium dark:text-VeryLightGray' />
            </div>
            <div className="p-1 font-medium dark:text-VeryLightGray">Back</div>
         </div>
      </button>
    </div>
  )
}

export default BackButton
