import React from 'react'
import codeIMG from '../../includes/img/jpeq/pexels-pixabay-code.jpg'


function Skills_w_IMG() {

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
    <section id="Skills-w-Img">
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-5'>
            <div className=' col-span-6 order-1 sm:order-last'>
                <div className=''>
                    <p className='ml-4 font-bold'>Progammiersprachen die ich gelernt habe:</p>
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
                <img className='px-4 sm:px-0 md:aspect-video h-full' src={codeIMG} alt="laptop"  width={"100%"}/>
            </div>
        </div>
    </section>
)}

export default Skills_w_IMG