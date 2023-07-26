import React from 'react'
import StoryCard from './StoryCard'

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
        <div>
            {story.map((story) => (
                <StoryCard title={story.title} />
            ))}
        </div>
    )
}

export default Stories