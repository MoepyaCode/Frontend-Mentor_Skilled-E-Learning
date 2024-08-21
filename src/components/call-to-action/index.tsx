import React from 'react'
import Wrapper from '../wrapper'
import { Assets } from '../../assets'

export default function CallToAction() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const screenType = {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1280,
    isDesktop: width >= 1280
  }

  React.useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Wrapper className='flex flex-col gap-[46px]'>
      <Wrapper className='flex flex-col flex-nowrap gap-[26px] px-[16px] sm:pl-[40px] xl:pl-[165px] md:w-[clamp(200px,100%,500px)] lg:w-[clamp(200px,100%,620px)] xl:w-[clamp(200px,100%,650px)]'>
        <h1 className='text-[#13183F] text-[40px] xl:text-[56px] font-bold'>Maximize skill, minimize budget</h1>
        <p className='font-medium leading-[26px] text-[#83869A] text-[18px]'>Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>

        <button className='self-start w-[167px] h-[56px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] rounded-full text-white leading-[26px] font-bold hover:opacity-50 transition'>Get Started</button>
      </Wrapper>
      {screenType.isMobile && <img className='object-contain' src={Assets.imageHeroMobile2X} alt="" />}
      {screenType.isTablet && <img className='object-contain absolute top-[-92px] right-[-300px] max-w-[640px] aspect-square' src={Assets.imageHeroTablet2X} alt="" />}
      {screenType.isDesktop && <img className='object-contain absolute top-[-146.13px] right-[-335.63px] max-w-[991.63px] aspect-square' src={Assets.imageHeroDesktop2X} alt="" />}
    </Wrapper>
  )
}
