import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Logo from '../../includes/img/png/KeskinCoding-OhneBG.png'

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

return (
    <div className='flex justify-between  bg-blue-500/40'>
        <div className='flex items-center'>
            <img src={Logo} width={"80px"} height={"80px"} alt="company-logo" className='p-1'/>
            <h3 className='font-bold md:text-2xl italic '>Keskin Software <br/> <span className='ml-10 '>Solution</span></h3>
        </div>
        <div className=''>
            
        </div>
        <div className='flex pb-2'>
            <div className='hidden sm:flex  mt-8 '>     
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Home</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Meine Projekte</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Services</button>
                <button className='text-lg md:text-xl font-bold mx-2 hover-underline-animation'>Contact us</button>
            </div>
        </div>
    </div>
)}

export default Header