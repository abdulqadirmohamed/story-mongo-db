import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='md:w-[60%] w-[90%] mx-auto mt-4 flex justify-between'>
        <h1>Abdulqadir</h1>
        <BiMenuAltRight size={20}/>
    </div>
  )
}

export default Header