import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




function Footer(props) {

  const { ClassNames } = props

  const footerLinks =[
    [
      {link:"https://www.facebook.de",icon:"fab fa-facebook"},
      {link:"https://www.instagram.de",icon:"fab fa-facebook"},
      {link:"https://www.twitter.de",icon:"fab fa-facebook"},
    ],
    [
      {link:"https://www.facebook.de",icon:"fab fa-facebook"},
      {link:"https://www.instagram.de",icon:"fab fa-facebook"},
      {link:"https://www.twitter.de",icon:"fab fa-facebook"},
    ],
    [
      {link:"https://www.facebook.de",icon:"fab fa-facebook"},
      {link:"https://www.instagram.de",icon:"fab fa-facebook"},
      {link:"https://www.twitter.de",icon:"fab fa-facebook"},
    ]
]

return (
    <footer className={ClassNames}>
      <div className='text-center text-white grid grid-cols-1 sm:grid-cols-12'>
        <div className='sm:col-span-4'>
          <h3>Company</h3>
          <ul className='text-left sm:ml-5'>
            {footerLinks && footerLinks[0].map(({link,icon},index)=>
              <li key={index}></li>
            )}
            
          </ul>
        </div>

        <div className='sm:col-span-4'>
          <h3>Links</h3>
          <ul className='text-left sm:ml-5'>
            {footerLinks && footerLinks[1].map(({link,icon},index)=>
              <li key={index}></li>
            )}
            
          </ul>
        </div>

        <div className='sm:col-span-4'>
          <h3>Socials</h3>
          <ul className='text-left sm:ml-5'>
            {footerLinks && footerLinks[2].map(({link,icon},index)=>
              <li key={index}></li>
            )}
            
          </ul>
        </div>

      </div>
    </footer>
)}

export default Footer