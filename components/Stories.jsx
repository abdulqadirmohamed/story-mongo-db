import React from 'react'
import Link from 'next/link';

const getStory = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/stories', {
            cache: 'no-store'
        });
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const Stories = async () => {
    const { story } = await getStory()
    return (
        <>
        {story.map((story) => (
            <div className='bg-gray-50 px-5 py-3 rounded-sm my-3'>
                <Link href={`story/${story._id}`}>
                    <h4 className='my-2 text-yellow-600 text-sm'>{story.tag}</h4>
                    <h1 className='font-bold'>{story.title}</h1>
                    <p className='text-sm mt-1'>{story.description}</p>
                    <div className='my-2 text-yellow-600 text-sm'>
                        {/* <span>{result}</span> */}
                        <span className='w-2 h-2 bg-yellow-500 mx-3 rounded-full'></span>
                        <span>4 Min</span>
                    </div>
                </Link>
            </div>
        ))}
        </>
    )
}

export default Stories