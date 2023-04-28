import React from 'react'


function Text_with_IMG(props) {
    const {headline,text,pos,space,imgSRC,altDesc,textClass}=props
    var position

const getPosition =()=>{
    if(pos==="text-left"){
        position = "order-last sm:order-first"
    }else{
        position = "order-last"
    }
    return position
}




return (
    <section id="Text-w-IMG" className={`${space} mb-5 sm:mb-0`}>
        <div className={`grid grid-cols-1 sm:grid-cols-12`}>      
            <div className={`col-span-6 ${getPosition()} `}>
                <div className='grid grid-cols-12 '>
                    { headline !== undefined ? <h1 className='col-span-12 font-bold text-2xl underline pt-2 sm:pt-0  ml-5 sm:ml-0'>{headline}</h1> : <span></span>}
                        <p className={`col-span-12 ${textClass}`}>
                            {text}
                        </p>
                </div>
            </div>

            <div className={`col-span-6 `}>
                <img className='px-4 sm:px-0 md:aspect-video h-full' src={imgSRC} alt={altDesc}  width={"100%"}/>
            </div>
        </div>

    </section>
)}

export default Text_with_IMG