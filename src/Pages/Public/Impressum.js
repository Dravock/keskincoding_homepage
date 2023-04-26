import React from 'react'

const Impressum = () => {

return (
    <div className='container'>
        <h1 className='text-center mt-4 headerPage'>Impressum</h1>
        <div className='mt-5'>
            <h3 className='text-underline'>Unternehmens Daten</h3>
            <div className='mx-3'>
                <h5>Keskin software Solution GmbH</h5>
                <h6>Vertreten durch den Geschäftsführer Deryan Yasin Keskin</h6>
            </div>
            <br/>

            <h3 className='text-underline'>Anschrift</h3>
            <div className='mx-3'>
                <h6>Sommerbergstraße 5</h6>
                <h6>75387 Neubulach</h6>
                <h6>Telefon: +49 07053 3346</h6>
                <h6>Email: D.Keskin@Keskincoding.de</h6>
            </div>
            <br/>
            <h3 className='text-underline'> Steuer Daten</h3>
            <div className='mx-3'>
                <h6>UstID: DEXXXXXXXX</h6>
                <h6>Eingetragen im Handelsregister des Amtsgerichts Musterstadt</h6>
                <h6>Handelsregisternummer: ARF 48107 ZX</h6>
            </div>
        </div>
    </div>
)
}

export default Impressum