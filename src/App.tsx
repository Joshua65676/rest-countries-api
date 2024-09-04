import './App.css'
import HomeApi from './components/HomeApi'
import { IoMoonOutline } from "react-icons/io5";

function App() {

  return (
    <>
      <div className="space-y-10">
            {/* NavBar */}
        <nav className="w-screen shadow -ml-[50px] h-20 -mt-10">
         <div className="p-[2rem] flex justify-between max-w-[1280px] ml-24">
          <div className="">
            <h1 className="">Where in the world?</h1>
          </div>
           {/* Dark Mode */}
          <button className="flex space-x-1">
            <div className='mt-1'>
              <IoMoonOutline />
            </div>
            <div className=''>
              <span className="">Dark Mode</span>
            </div>
          </button>
         </div>
        </nav>
        
        <div className="max-w-[1280p] ml-20">
          <HomeApi />
        </div>
      </div>
    </>
  )
}

export default App
