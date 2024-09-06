import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Country {
    name: {
        common: string;
        official: string;
        nativeName: object;
      };
      capital: string[];
      region: string;
      population: number;
      flags: {
        png: string;
        svg: string;
      };
      cca3: string;
}

const CountryDetails: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [country, setCountry] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchCountryData = async () => {
          try {
            const response = await axios.get(
               `https://restcountries.com/v3.1/name/${name}`
            );
            setCountry(response.data);
            console.log(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching country data:', error);
            setLoading(false);
          }
        };
    
        fetchCountryData();
      }, [name]);
      
      if (loading) return <div>Loading...</div>;
      if (!country) return <div>Country not found</div>;
    
  return (
    <div className=''>
    <ul className='grid grid-cols-4 gap-10'>
      {country.map((country) => (
        <li key={country.cca3} className='w-[15.5rem] border border-white shadow dark:bg-DarkBlue dark:border-DarkBlue rounded-md'>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className='w-[15.5rem] h-48 rounded-t-md' />
          <div className="h-40 p-2 pl-5 space-y-2">
           <div className="mt-3">
            <h4 className='font-bold text-VeryDarkBlue dark:text-VeryLightGray'>{country.name.common}</h4>
           </div>
           <div className='space-y-1'>
            <p className='text-sm font-medium dark:text-VeryLightGray'>Population: <span className='text-DarkGray'>{country.population}</span></p>
            <p className='text-sm font-medium dark:text-VeryLightGray'>Region: <span className='text-DarkGray'>{country.region}</span></p>
            <p className='text-sm font-medium dark:text-VeryLightGray'>Capital: <span className='text-DarkGray'>{country.capital}</span></p>
           </div>
          </div>
        </li>
      ))}
    </ul>
 </div>
  )
}

export default CountryDetails
