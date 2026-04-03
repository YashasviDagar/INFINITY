import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsLetter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda ea sequi officia saepe explicabo incidunt consequuntur quos. Dolores, numquam illum hic porro recusandae, aperiam iure ratione blanditiis sit delectus tempora consequatur temporibus quos culpa ipsa expedita obcaecati? Vero error consequuntur totam est doloremque. Tempore!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit minus explicabo inventore quisquam laborum esse saepe distinctio quasi laudantium. Aliquam, dolor animi. Quod maxime labore ex asperiores neque sint repudiandae, minus amet saepe sequi eum libero laborum atque consequatur, cumque voluptatibus perferendis temporibus? Praesentium, neque?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem modi, qui eum iste accusamus minus quas tempora architecto inventore ab eligendi, eius fugiat voluptate hic iure quo aliquid nam assumenda amet nostrum accusantium illum impedit dolorum! Beatae ex porro incidunt eveniet voluptate corrupti quos veniam.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor unde blanditiis aperiam officia voluptatibus, fuga vel id repellendus animi maxime repellat corrupti omnis facere ut neque deserunt hic dicta veritatis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit autem facere eum quaerat cumque vitae nobis veniam, sapiente laboriosam dolorem nam! Ducimus, harum. Voluptatum et recusandae ratione esse possimus quo nulla inventore harum dolore?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquam perferendis reprehenderit error, in doloremque ut debitis laudantium quos esse modi quas ipsam est officiis exercitationem beatae libero? Qui maxime quam architecto.</p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
