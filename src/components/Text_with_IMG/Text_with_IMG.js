import React from 'react'
import LaptopIMG from '../../includes/img/jpeq/pexels-junior-edited.jpg'
import ContentText from '../../includes/enums/Texte/Text_w_IMG'


function Text_with_IMG() {



return (
    <section id="Text-w-IMG">

        <div className='grid grid-cols-1 sm:grid-cols-12  pt-5'>      
            <div className=' col-span-6 lg:col-span-6 order-1 sm:order-1'>
                <div className='grid grid-cols-12 sm:items-center md:items-start '>
                    <h1 className='col-span-12  pt-0 sm:pt-5 ml-5 sm:ml-0 font-bold text-3xl underline'>Wer bin ich?</h1>
                    <span className='col-span-12 inline-block align-middle mt-0  lg:mt-4 px-4 sm:px-0 sm:mr-3 '>
                        {ContentText.appJS_1.text}
                    </span>
                </div>
            </div>

            <div className='col-span-6 order-first sm:order-1 md:order-last'>
                <img className='px-4 sm:px-0 md:aspect-video h-full' src={LaptopIMG} alt="laptop"  width={"100%"}/>
            </div>
        </div>

    </section>
)}

export default Text_with_IMG