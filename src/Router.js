// NPM MODULES
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import Cookies from 'universal-cookie';

// PATHS IMPORT
import App from './Pages/Public/App.js';
import Impressum from './Pages/Public/Impressum.js';
import Datenschutz from './Pages/Public/Datenschutz.js';
import MyProjects from './Pages/Public/MyProjects.js';
import Services from './Pages/Public/Services.js';
import ContactUs from './Pages/Public/ContactUs.js';
// IMPORTS COMPONENTS
import Header from './components/Header/Header.js';
import Hero from './components/Herobanner/Hero.js';
import HeroIMG from './includes/img/jpeq/connected_world.jpeg'
import Footer from './components/Footer/Footer'

function Router() {

    const cookies = new Cookies()
    const token = cookies.get('token')

useEffect(() => {
    (async()=>{
        try{
            if(token !== undefined && token !== null && token !== "" ){
            Validation()
            }
        } catch (error) {
            // Do Something on catch
        }
    })() 
}, [token])


return (
    <>
        <BrowserRouter basename='/'>
            <Header />
            <Hero imgSRC={HeroIMG} space={"mb-10"}/>
            <section  id="PageContent" className='bg-white px-2 md:px-5 lg:px-80 mb-20 pb-10'>
                {/* REACT ROUTER ROUTES */}
                <Routes>
                    {/* PUBLIC PAGES */}
                    <Route path='/' element={<App />}/>
                    <Route path='/impressum' element={<Impressum />}/>
                    <Route path='/privacy-policy' element={<Datenschutz />}/>
                    <Route path='/meine-projekte' element={<MyProjects />}/>
                    <Route path='/services' element={<Services />}/>
                    <Route path='/contact-us' element={<ContactUs />}/>

                    {/* Private Pages */}

                </Routes>
            </section>
            <Footer ClassNames={""} />
        </BrowserRouter>
    </>
)};

export default Router;
