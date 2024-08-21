import Wrapper from '../wrapper'

type Props = {
  title: string,
  description: string,
  icon: string
}

export default function SkillsCard(props: Props) {
  return (
    <Wrapper className='relative flex flex-col justify-between rounded-[10px] bg-white px-[28px] pt-[56px] pb-[32px] md:w-[clamp(300px,100%,340px)] xl:w-[clamp(320px,100%,350px)] md:h-[259px] xl:h-[322px] md:pl-[32px] md:pr-[22px] md:mb-[40px] xl:px-[32px]'>
      <img className='absolute top-[-24px] left-[28px]' src={props.icon} alt="" />
      <Wrapper className='flex flex-col gap-[16px] xl:gap-[24px]'>
        <h2 className='font-extrabold text-[20px] xl:text-[24px] text-[#13183F]'>{props.title}</h2>
        <p className='font-medium text-[#83869A] xl:text-[18px] leading-[26px]'>{props.description}</p>
      </Wrapper>
      <button className='font-bold text-[18px] text-[#F74780] mt-[24px] self-start hover:opacity-50 transition'>Get started</button>
    </Wrapper>
  )
}
