import React, {useState, useEffect} from 'react'
import { IoMoonOutline } from "react-icons/io5";

const DarkMode:React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
        }
      }, []);

      const toggleDarkMode = () => {
        if (isDarkMode) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
      };
      
  return (
     <button onClick={toggleDarkMode} className="flex -mr-5 space-x-1">
         {isDarkMode ?
          <>
            <div className='mt-1'>
             <IoMoonOutline />
            </div>
            <div className=''>
              <span className="text-sm font-medium text-VeryDarkBlues dark:text-White">Light Mode</span>
            </div>
          </>
           :
            <>
               <div className='mt-1'>
                <IoMoonOutline />
               </div>
               <div className=''>
                 <span className="text-sm font-medium text-VeryDarkBlues dark:text-White">Dark Mode</span>
               </div>
            </>
           }
     </button>
  )
}

export default DarkMode
