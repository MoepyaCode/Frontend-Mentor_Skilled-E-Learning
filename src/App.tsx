import { Assets } from './assets'
import { CallToAction, Container, Footer, Header, Main, Wrapper } from './components'
import SkillsCard from './components/skills-card'
import { skillsCardDetails } from './constants'

export default function App() {

  function skillsCardsContent() {
    return (
      <Wrapper className='flex flex-col px-[16px] pb-[80px] gap-[40px]  bg-gradient-to-b from-white to-[#F0F1FF]'>
        <Wrapper className='bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] font-extrabold text-[24px] text-white leading-[34px] px-[28px] pt-[24px] pb-[32px] rounded-[10px]'>
          Check out our most popular courses!
        </Wrapper>
        {skillsCardDetails.map((skill, index) => (
          <SkillsCard
            key={index}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </Wrapper>
    )
  }

  return (
    <Main className='font-plus-jakarta bg-white flex flex-col min-w-full'>
      <Header />

      <Container className='flex flex-col'>
        <CallToAction />
        <img className='object-contain w-full mt-[46px]' src={Assets.imageHeroMobile2X} alt="" />
        {skillsCardsContent()}
      </Container>
      <Footer />
    </Main>
  )
}
