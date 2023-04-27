import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Logo from '../../includes/img/png/KeskinCoding-OhneBG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const cookies = new Cookies()
    const navigate = useNavigate()
    const actullURL = window.location.href
    const activLink = "text-[#f5a523]"

useEffect(() => {
    if(actullURL ==="http://localhost:3001/"){

    }
}, []);

const logout =()=>{
    cookies.remove('token', { path: '/todo-app' });
    cookies.remove('token', { path: '/' });
    navigate('/')
}

const openMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.add("overflow-hidden")
    navOpen.classList.add("block")
    navOpen.classList.remove("hidden")
}

const closeMobileNav =()=>{
    const navOpen = document.getElementById("mobile-nav-open")
    const body = document.body
    body.classList.remove("overflow-hidden")
    navOpen.classList.add("hidden")
    navOpen.classList.remove("block")
}

return (
    <div className='flex justify-between  bg-blue-500/40'>
        <div className='flex items-center'>
            <img src={Logo} width={"80px"} height={"80px"} alt="company-logo" className='p-1'/>
            <h3 className='font-bold md:text-2xl italic '>Keskin Software <br/> <span className='ml-10 '>Solution</span></h3>
        </div>
        <div className=''>
            
        </div>
        <div className=' flex pb-2'>
            <div className='sm:hidden mt-3 mr-4 cursor-pointer' >
                <FontAwesomeIcon icon={faBars} className="absolute right-3 top-3 text-black justify-end" size='3x' onClick={()=>openMobileNav()}/>

            </div>
            <div id="mobile-nav-open" className='absolute h-[101%]  bg-black/95 z-30 top-0 right-0 w-full hidden'>
                <div className='flex justify-center'>
                    <h2 className=' text-white  text-2xl font-bold mt-4 '>KSS</h2>
                    <FontAwesomeIcon icon={faXmark} className="absolute right-3 top-2 text-white justify-end" size='3x' onClick={()=>closeMobileNav()}/>
                </div>
                <div className='grid grid-cols-12 text-white mt-20'>
                    <button className='col-span-full py-6 text-lg md:text-xl font-bold mx-2 '>Home</button>
                    <button className='col-span-full py-6 text-lg md:text-xl font-bold mx-2 '>Meine Projekte</button>
                    <button className='col-span-full py-6 text-lg md:text-xl font-bold mx-2 '>Services</button>
                    <button className='col-span-full py-6 text-lg md:text-xl font-bold mx-2 '>Contact us</button>
                </div>
            </div>

            <div id="desktop-nav-bar" className='hidden sm:flex  mt-8 '>     
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Home</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Meine Projekte</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Services</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Contact us</button>
            </div>
        </div>
    </div>
)}

export default Header