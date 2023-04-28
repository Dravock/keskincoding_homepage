import React from 'react'
import { useNavigate } from 'react-router-dom'

function CTA(props) {
    const {CTA_ID,text,space,ClassNames} = props
    const navigate = useNavigate()

return (
    <section id={`CTA-${CTA_ID}`} className={`w-full ${space}`}>
        <div className={ClassNames}>
            {text && text.map(( {text_cta_1,text_cta_2},index) =>
            <div className='text-center font-bold' key={index}>
                <h2 className='text-3xl'>{text_cta_1}</h2>
                <h3 className='text-2xl'>{text_cta_2}</h3>
            </div>
            )}
            <div className='text-center'>
                <button className='btn-red' onClick={()=>navigate('/contact-us')}>Kontaktformular</button>
            </div>
        </div>
    </section>
)}

export default CTA