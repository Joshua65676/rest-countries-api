import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoSearch } from "react-icons/go";
import FilterByRegion from './FilterByRegion';
import RegionSearchApi from './RegionSearchApi';
import { Link } from 'react-router-dom';

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

    const regions = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
    ];

    const CountryList: React.FC = () => {
    const [countrySearch, setCountrySearch] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [countryData, setCountryData] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    // const navigate = useNavigate();
    
    useEffect(() => {
        const fetchCountryData = async () => {
          try {
            const response = await axios.get(
               'https://restcountries.com/v3.1/all'
            );
            setCountryData(response.data);
            setFilteredCountries(response.data);
            // console.log(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching country data:', error);
            setError('Error fetching data');
            setLoading(false);
          }
        };
    
        fetchCountryData();
      }, []);
         // search for country
    useEffect(() => {
        const results = countryData.filter(country =>
          country.name.common.toLowerCase().includes(countrySearch.toLowerCase())
        );
        setFilteredCountries(results);
      }, [countrySearch, countryData]);

       //   selected regions
       useEffect(() => {
        if (selectedRegion) {
          const results = countryData.filter(country => country.region === selectedRegion);
          setFilteredCountries(results);
        } else {
          setFilteredCountries(countryData);
        }
      }, [selectedRegion, countryData]);
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;
      
  return (
    <div>
     <div className='space-y-16'>
        {/* search input and filter input */}
      <div className=''>
       <div className="flex justify-between">
        {/* search input */}
        <div className='relative border border-white shadow w-96 bg-White dark:border-DarkBlue'>
          <GoSearch className='absolute translate-y-[85%] w-5 ml-9 text-DarkGray dark:text-VeryLightGray'/>
          <input
           type='text'
           placeholder='Search for a country...'
           value={countrySearch}
           className='box-border p-3 pl-16 text-sm w-96 text-DarkGray dark:bg-DarkBlue dark:text-VeryLightGray'
           onChange={(e) => setCountrySearch(e.target.value)}
          />
        </div>
        {/* filter input */}
        <div className="-mr-12">
            <FilterByRegion />
        </div>
       </div>
       
        <div className="">
            <RegionSearchApi regions={regions} setSelectedRegion={setSelectedRegion} />
        </div>
       
      </div>
       
      {/* Country List */}
      <div className=''>
         <ul className='grid grid-cols-4 gap-10'>
           {filteredCountries.map((country) => (
            <Link to={`/country/${country.name.common}`}>
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
            </Link>
           ))}
         </ul>
      </div>
     </div>
    </div>
  )
}

export default CountryList;

