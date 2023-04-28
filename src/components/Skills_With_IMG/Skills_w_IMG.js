import React from 'react'


function Skills_w_IMG(props) {
    const {pos,skills,imgSRC,imgDesc}= props

    var position

    const getPosition =()=>{
        if(pos==="text-left"){
            position = "order-first"
        }else{
            position = "order-last"
        }
        return position
    }

return (
    <section id="Skills-w-Img" className='mt:0 sm:-mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-5'>
            <div className={`col-span-6 ${getPosition()}`}>
                <div className='mb-5 sm:mb-0'>
                    <p className='ml-3 font-bold'>Progammiersprachen die ich gelernt habe:</p>
                    <ul className=' ml-14' style={{listStyleType:"square"}}>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-6'>
                                {skills && skills[0].map(({skill},index)=>
                                <li key={index}>{skill}</li>
                                )}
                            </div>
                            <div className='col-span-6'>
                                {skills && skills[1].map(({skill},index)=>
                                    <li key={index}>{skill}</li>
                                )}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <div className='col-span-6 mb-5'>
                <img className='px-4 sm:px-0 md:aspect-video h-full' src={imgSRC} alt={imgDesc}  width={"100%"}/>
            </div>
        </div>
    </section>
)}

export default Skills_w_IMG