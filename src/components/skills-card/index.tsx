import React from 'react'
import Wrapper from '../wrapper'

type Props = {
  title: string,
  description: string,
  icon: string
}

export default function SkillsCard(props: Props) {
  return (
    <Wrapper className='relative rounded-[10px] bg-white px-[28px] pt-[56px] pb-[32px]'>
      <img className='absolute top-[-24px] left-[28px]' src={props.icon} alt="" />
      <h2 className='font-extrabold text-[20px] text-[#13183F]'>{props.title}</h2>
      <p className='font-medium text-[#83869A] leading-[26px] mt-[16px]'>{props.description}</p>
      <button className='font-bold text-[18px] text-[#F74780] mt-[24px]'>Get started</button>
    </Wrapper>
  )
}
