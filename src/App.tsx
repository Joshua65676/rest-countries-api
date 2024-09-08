import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DarkMode from './components/DarkMode'
import HomeApi from './components/HomeApi'
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <>
      <div className="space-y-10">
            {/* NavBar */}
        <nav className="lg:w-[105.5%] md:w-[111%] xm:w-max sm:w-max shadow -ml-[47px] h-20 -mt-10 bg-White dark:bg-DarkBlue dark:text-White">
         <div className="p-[2rem] flex justify-between max-w-[1280px] lg:ml-24 lg:space-x-[rem] xm:space-x-[7rem] sm:space-x-14">
          <div className="">
            <h1 className="text-xl font-bold text-VeryDarkBlues dark:text-White">Where in the world?</h1>
          </div>
           {/* Dark Mode */}
          <div className="">
            <DarkMode />
          </div>
         </div>
        </nav>
        
        <div className='max-w-[1280px] ml-20'>
           <Router>
             <Routes>
               <Route path="/" element={<HomeApi />} />
               <Route path="/country/:name" element={<CountryDetails />} />
             </Routes>
           </Router>
        </div>
      </div>
    </>
  )
}

export default App
