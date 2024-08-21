import React from 'react'
import Wrapper from '../wrapper'

export default function CallToAction() {
  return (
    <Wrapper className='flex flex-col flex-nowrap gap-[26px] px-[16px]'>
        <h1 className='text-[#13183F] text-[40px] font-bold'>Maximize skill, minimize budget</h1>
        <p className='font-medium leading-[26px] text-[#83869A]'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>

        <button className='self-start w-[167px] h-[56px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] rounded-full text-white leading-[26px] font-bold'>Get Started</button>
    </Wrapper>
  )
}
