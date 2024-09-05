import './App.css'
import DarkMode from './components/DarkMode'
import HomeApi from './components/HomeApi'

function App() {

  return (
    <>
      <div className="space-y-10">
            {/* NavBar */}
        <nav className="w-screen shadow -ml-[50px] h-20 -mt-10 bg-White dark:bg-DarkBlue dark:text-White">
         <div className="p-[2rem] flex justify-between max-w-[1280px] ml-24">
          <div className="">
            <h1 className="text-xl font-bold text-VeryDarkBlues dark:text-White">Where in the world?</h1>
          </div>
           {/* Dark Mode */}
          <div className="">
            <DarkMode />
          </div>
         </div>
        </nav>
        
        <div className="max-w-[1280px] ml-20">
          <HomeApi />
        </div>
      </div>
    </>
  )
}

export default App
