// PATHS IMPORT
import App from './Pages/Public/App.js';
import Impressum from './Pages/Public/Impressum.js';
import Datenschutz from './Pages/Public/Datenschutz.js';

// IMPORTS FOR WEBSITE DESIGN
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Validation } from './includes/functions/Validation';
import Cookies from 'universal-cookie';
import MyProjects from './Pages/Public/MyProjects.js';
import Services from './Pages/Public/Services.js';
import ContactUs from './Pages/Public/ContactUs.js';



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
        </BrowserRouter>
    </>
)};

export default Router;
