import Link from 'next/link'
import React from 'react'

const StoryCard = ({ title, description, tag, createdAt, id }) => {
    let theDate = new Date(createdAt);
    let option = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }
    let result = theDate.toLocaleDateString('en-US', option).replaceAll("/","-")
    return (
        <div className='bg-gray-50 px-5 py-3 rounded-sm my-3'>
            <Link href={`story/${id}`}>
                <h4 className='my-2 text-yellow-600 text-sm'>{tag}</h4>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-sm mt-1'>{description}</p>
                <div className='my-2 text-yellow-600 text-sm'>
                    <span>{result}</span>
                    <span className='w-2 h-2 bg-yellow-500 mx-3 rounded-full'></span>
                    <span>4 Min</span>
                </div>
            </Link>
        </div>
    )
}

export default StoryCard