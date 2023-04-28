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
import text from '../../includes/enums/Texte/HomeContent'

// IMG IMPORTS
import LaptopIMG from '../../includes/img/jpeq/pexels-junior-edited.jpg'
import HeroIMG from '../../includes/img/jpeq/connected_world.jpeg'
import codeIMG from '../../includes/img/jpeq/pexels-pixabay-code.jpg'
import speakingPeople from '../../includes/img/jpeq/AdobeStock_567653793.jpeg';
import codeAndGlasses from '../../includes/img/jpeq/pexels-kevin-ku-577585.jpg';


function App() {

  const skills =[
    [
        {skill:"HTML"},
        {skill:"CSS"},
        {skill:"JS"},
        {skill:"React.js"},
        {skill:"TailwindCSS"},
        {skill:"Bootstrap"},
    ],
    [
        {skill:"PHP"},
        {skill:"Python"},
        {skill:"MariaDB/MySQL"},
        {skill:"Java"},
        {skill:"C++"},
    ]
]

return (
  <>
    <Header />
    <Hero imgSRC={HeroIMG} space={"mb-10"}/>
    <section id="PageContent" className='bg-white px-5 mb-20 pb-10'>
        <Text_with_IMG  pos={"text-left"}  imgSRC={LaptopIMG} altDesc={"MacBook Image"} headline={"Willkommen bei Keskin Software Solution"}  text={text[0].tb_1} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:mr-3 text-justify'} />
        <Text_with_IMG  pos={"text-right"} imgSRC={codeIMG} altDesc={"screen of code"} space={"mb-10"} text={text[0].tb_2} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:ml-3 text-justify'}/> 
        <CTA CTA_ID={1} ClassNames={'bg-blue-500/40 w-full  pr-5 '} space={"my-10"} text={text}/>
        <Text_with_IMG  pos={"text-left"} imgSRC={speakingPeople} altDesc={"two speaking people"} space={"mb-10"} text={text[0].tb_3} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:mr-3 text-justify'}/> 
        <Text_with_IMG  pos={"text-right"} imgSRC={codeAndGlasses} altDesc={"laptop with glasses in front"} space={"mb-10"} text={text[0].tb_4} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:ml-3 text-justify'}/> 
    </section>
    <Footer ClassNames={""} />
    {/* /> */}
  </>
  )
}

export default App
