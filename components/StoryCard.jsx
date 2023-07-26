import Link from 'next/link'
import React from 'react'

const StoryCard = ({title}) => {
    return (
        <div className='bg-gray-50 px-5 py-3 rounded-sm my-3'>
            <Link href="#">
                <h4 className='my-2 text-yellow-600 text-sm'>Ethics</h4>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae possimus voluptate,
                    illo obcaecati repudiandae consequuntur adipisci accusantium cupiditate dolorem?</p>
                <div className='my-2 text-yellow-600 text-sm'>
                    <span>26 June, 2023</span>
                    <span className='w-2 h-2 bg-yellow-500 mx-3 rounded-full'></span>
                    <span>4 Min</span>
                </div>
            </Link>
        </div>
    )
}

export default StoryCard