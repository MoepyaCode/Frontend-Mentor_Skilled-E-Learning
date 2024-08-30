import { CallToAction, Container, Footer, Header, Main, Wrapper, SkillsCard } from './components'
import { skillsCardDetails } from './constants'

export default function App() {

  function skillsCardsContent() {
    return (
      <Wrapper className='flex flex-col justify-between md:flex-row md:flex-wrap md px-[16px] sm:px-[40px] xl:px-[165px] pb-[80px] gap-[40px] md:gap-0  bg-gradient-to-b from-white to-[#F0F1FF]'>
        <Wrapper className='bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] font-extrabold text-[24px] text-white leading-[34px] px-[28px] pt-[24px] pb-[32px] rounded-[10px] md:w-[clamp(300px,100%,340px)] xl:w-[clamp(320px,100%,350px)] md:h-[259px] xl:h-[322px] md:pt-[56px] md:pl-[32px] md:pr-[22px] md:mb-[40px]'>
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
    <Main className='relative font-plus-jakarta bg-white flex flex-col min-w-full overflow-x-hidden 2xl:max-h-max'>
      <Header />

      <Container className='flex flex-col md:gap-[210px] xl:gap-[250px]'>
        <CallToAction />
        {skillsCardsContent()}
      </Container>
      <Footer />
    </Main>
  )
}