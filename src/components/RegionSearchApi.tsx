import React, {useState} from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface RegionButtonsProps {
  regions: string[];
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
}

const RegionSearchApi: React.FC<RegionButtonsProps> = ({ regions, setSelectedRegion }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };

  return (
   <div className='ml-[974px]'>
   
      <div className="-mt-10" onClick={toggleIcon}>
          {isOpen ?
            <MdKeyboardArrowUp className='translate-y-[50%] w-5 ml-52' />
            :
            <div className="space-y-8">
              <MdOutlineKeyboardArrowDown className='translate-y-[50%] w-5 ml-52' />
              <div className='absolute z-[10000] border border-White shadow w-48 bg-White ml-14 rounded-lg'>
                {regions.map(region => (
                <button key={region} onClick={() => setSelectedRegion(region)} className='flex flex-col'>
                 <div className='p-2 pl-10'>
                  {region}
                 </div>
                </button>
                ))}
              </div>
            </div>
          }
      </div>
   </div>
  );
};

export default RegionSearchApi;

