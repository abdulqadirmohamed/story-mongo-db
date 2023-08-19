import Link from 'next/link'
import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
  return (
    <div className='md:w-[60%] w-[90%] mx-auto mt-4 flex justify-between'>
        <Link href="/">Abdulqadir</Link>
        <BiMenuAltRight size={20}/>
    </div>
  )
}

export default Header