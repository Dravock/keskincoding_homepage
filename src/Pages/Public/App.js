import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Herobanner/Hero'
import HeroIMG from '../../includes/img/jpeq/connected_world.jpeg'

// IMG IMPORTS
import CTA from '../../components/CTA/CTA'
import Skills_w_IMG from '../../components/Skills_With_IMG/Skills_w_IMG'
import Text_with_IMG from '../../components/Text_with_IMG/Text_with_IMG'



function App() {


return (
  <>
    <Header />
    <Hero heroIMG={HeroIMG}/>
    <section id="PageContent" className='bg-white px-5'>
        <Text_with_IMG />
        <Skills_w_IMG />
    </section>
    <CTA CTA_ID={1} ClassNames={'bg-blue-500/40 w-full mb'}/>
    <section id="Footer">
      <div>Hier kommt der Footer </div>
    </section>
  </>
  )
}

export default App
