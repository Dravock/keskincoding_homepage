import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Herobanner/Hero'
import HeroIMG from '../../includes/img/jpeq/connected_world.jpeg'

// IMG IMPORTS
import LaptopIMG from '../../includes/img/jpeq/pexels-junior-edited.jpg'
import codeIMG from '../../includes/img/jpeq/pexels-pixabay-code.jpg'
import laptop_codeIMG from '../../includes/img/jpeq/pc_with_code.jpg'



function App() {

  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
              

return (
  <div className="">
    <Header />
    <Hero heroIMG={HeroIMG}/>
    <div className='bg-white container mx-auto px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-12  pt-5 '>      
        <div className=' col-span-6 order-last sm:order-2'>
          <h1 className='w-full pt-0 sm:pt-5 ml-5 sm:ml-0 font-bold text-3xl underline '>Wer bin ich?</h1>
          <div className='sm:flex sm:items-center md:items-start h-full'>
            <span className='inline-block align-middle mt-0  lg:mt-4 px-4 sm:px-0 sm:mr-3 text-justify'>
              Ich heiße Deryan Keskin und komme aus dem Kreis Calw in Baden-Württemberg, 
              vor 5 Jahren habe ich meine Ausbildung zum Fachinformatiker für Anwendungsentwicklung abgeschlossen. 
              Hauptsächlich bin ich in der Webentwicklung tätig aber auch andere Anwendungsbereiche sind mir geläufig. 
              Am liebsten Entwickle ich Web-Applikationen in React.js.
            </span>
          </div>
        </div>
        <div className='col-span-6 order-2 '>
          <img className='px-4 sm:px-0 md:aspect-video h-full' src={LaptopIMG} alt="laptop"  width={"100%"}/>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-12 mt-5'>
        <div className=' col-span-6 order-1 sm:order-last'>
          <div className='mt-5'>
            <p className='ml-4 font-bold'>Progammiersprachen die ich gelernt habe:</p>
            <ul className='mt-2 ml-14' style={{listStyleType:"square"}}>
              <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>React.js</li>
                  <li>Bootstrap</li>
                  <li>Tailwind</li>
                </div>
                <div className='col-span-6'>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className='col-span-6 '>
          <img className='px-4 sm:px-0 md:aspect-video h-full' src={codeIMG} alt="laptop"  width={"100%"}/>
        </div>
      </div>
      <hr className='my-10 bg-black'/>
      <div className='bg-blue-700/80 w-full py-10'>
        <h2 className='text-center font-bold'>Konnte ich ihr Intresse wecken?</h2>
        <h3 className='text-center font-bold'>Dann Kontieren Sie mich ganz einfach über mein Kontaktformular</h3>
        <div className='text-center'>
          <button className='btn-red'>Kontaktformular</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
