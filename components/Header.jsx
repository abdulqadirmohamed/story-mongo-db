import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='w-[60%] mx-auto mt-4 flex justify-between'>
        <h1>Abdulqadir</h1>
        <BiMenuAltRight size={20}/>
    </div>
  )
}

export default Header