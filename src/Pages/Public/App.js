// NPM MODULES
import React from 'react'

// COMPONENTS
import Header from '../../components/Header/Header'
import Hero from '../../components/Herobanner/Hero'
import CTA from '../../components/CTA/CTA'
import Skills_w_IMG from '../../components/Skills_With_IMG/Skills_w_IMG'
import Text_with_IMG from '../../components/Text_with_IMG/Text_with_IMG'
import Footer from '../../components/Footer/Footer'

// TEXTE
import text_1 from '../../includes/enums/Texte/HomeContent'

// IMG IMPORTS
import LaptopIMG from '../../includes/img/jpeq/pexels-junior-edited.jpg'
import HeroIMG from '../../includes/img/jpeq/connected_world.jpeg'

function App() {


return (
  <>
    <Header />
    <Hero imgSRC={HeroIMG} space={"mb-10"}/>
    <section id="PageContent" className='bg-white px-5'>
        <Text_with_IMG text={text_1[0].tb_1} pos={"text-left"}  imgSRC={LaptopIMG} altDesc={"MacBook Image"} headline={"Willkommen bei Keskin Software Solution"}   />
        <Text_with_IMG text={text_1[0].tb_2} pos={"text-right"} imgSRC={LaptopIMG} altDesc={"MacBook Image"} space={"mb-10"} /> 
        <Skills_w_IMG />
    </section>
    <CTA CTA_ID={1} ClassNames={'bg-blue-500/40 w-full mb'}/>
    <Footer ClassNames={"bg-black/90"}/>
  </>
  )
}

export default App
