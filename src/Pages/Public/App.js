// NPM MODULES
import React from 'react'

// COMPONENTS
import CTA from '../../components/CTA/CTA'
import Skills_w_IMG from '../../components/Skills_With_IMG/Skills_w_IMG'
import Text_with_IMG from '../../components/Text_with_IMG/Text_with_IMG'

// TEXTE
import text from '../../includes/enums/Texte/HomeContent'

// IMG IMPORTS
import LaptopIMG from '../../includes/img/jpeq/pexels-junior-edited.jpg'
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
    <Text_with_IMG  pos={"text-left"}  imgSRC={LaptopIMG} altDesc={"MacBook Image"} headline={"Willkommen bei Keskin Software Solution"}  text={text[0].tb_1} spaceHeader={'pt-2 sm:pt-0  ml-5 sm:ml-0'} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:mr-3 text-justify'} />
    <Text_with_IMG  pos={"text-right"} imgSRC={codeIMG} altDesc={"screen of code"} headline={"Das Team"} space={"mb-10"} text={text[0].tb_2} spaceHeader={'ml-2 sm:mt-3'} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:ml-3 text-justify'}/> 
    <CTA CTA_ID={1} ClassNames={'bg-blue-500/40 w-full  pr-5 '} space={"my-10"} text={text}/>
    <Text_with_IMG  pos={"text-left"} imgSRC={speakingPeople} altDesc={"two speaking people"} space={"mb-10"} text={text[0].tb_3} headline={"Unsere Philosophie"} spaceHeader={"ml-2 sm:ml-0"}textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:mr-3 text-justify'}/> 
    <Text_with_IMG  pos={"text-right"} imgSRC={codeAndGlasses} altDesc={"laptop with glasses in front"} headline={'Kommen Sie vorbei'} spaceHeader={"ml-2 sm:mt-3"} space={"mb-10"} text={text[0].tb_4} textClass={'mt-0  sm:mt-5 px-4 sm:px-0 sm:ml-3 text-justify'}/> 
  </>
  )
}

export default App
