import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/stories/${id}`, {
    cache: "no-store",
  });
  
  return res.json();
}


const page = async ({ params }) => {
  const { id } = params;
  const {story} = await getData(id);
  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.description}</p>
      <h5>{story.createdAt}</h5>
    </div>
  )
}

export default page