import Stories from '@/components/Stories'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='md:w-[40%] w-[90%] mx-auto'>
      <h1 className='my-10 text-2xl'>Stories</h1>
      <Stories />
    </div>
  )
}
