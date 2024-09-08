import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from './BackButton';

const CountryDetails = () => {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        const countryData = response.data[0];
        setCountry(countryData);

        if (countryData.borders) {
          const borderResponse = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join(',')}`);
          const borderNames = borderResponse.data.map((borderCountry: any) => borderCountry.name.common);
          setBorderCountries(borderNames);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching country data:', error);
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (!country) return <div>Country not found</div>;

  return (
 <div className='space-y-10 xm:-ml-24 sm:-ml-24 sm:mb-80 xm:mb-80 lg:mb-0 lg:-ml-0'>
     {/* back button */}
   <div className=''>
    <BackButton />
   </div>
     {/* details displace */}
   <div className="lg:flex lg:space-x-24 max-w-[1280px]">
    <img
      src={country.flags.png}
      alt={`Flag of ${country.name.common}`}
      className="lg:w-[30rem] lg:h-[24rem] xm:w-[30rem] xm:h-[20rem] sm:w-[30rem] sm:h-[20rem]"
    />

    <div className="h-40 p-2 mt-5 space-y-8 lg:pl-5">
      <div className="mt-3">
        <h4 className="text-2xl font-bold text-VeryDarkBlue dark:text-VeryLightGray">
          {country.name.common}
        </h4>
      </div>
      
      <div className="lg:flex lg:justify-between lg:space-x-[7rem] xm:space-y-8 sm:space-y-8 md:space-y-8 lg:space-y-0">
        {/* first side */}
       <div className="space-y-4">
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Native Name:{" "}
          <span className="text-DarkGray">
            {
              country.name.nativeName?.[
                Object.keys(country.name.nativeName)[0]
              ].common
            }
          </span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Population:{" "}
          <span className="text-DarkGray">{country.population}</span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Region:{" "}
          <span className="text-DarkGray">{country.region}</span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Sub Region:{" "}
          <span className="text-DarkGray">{country.subregion}</span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Capital:{" "}
          <span className="text-DarkGray">{country.capital}</span>
        </p>
       </div>
          {/* second side */}
       <div className="space-y-4">
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Top Level Domain:{" "}
          <span className="text-DarkGray">{country.tld.join(", ")}</span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Currencies:{" "}
          <span className="text-DarkGray">
            {Object.values(country.currencies)
            .map((currency: any) => currency.name)
            .join(", ")}
          </span>
        </p>
        <p className="text-sm font-medium dark:text-VeryLightGray">
          Languages:{" "}
          <span className="text-DarkGray">{Object.values(country.languages).join(", ")}</span>
        </p>
       </div>
      </div>
             {/* border countries */}
      <div className=''>
        <p className="text-sm font-medium dark:text-VeryLightGray">Border Countries:{" "}
            <span className="text-DarkGray">
             {borderCountries.join(", ")}
            </span>
        </p>
      </div>
    </div>
   </div>
 </div>
);
};

export default CountryDetails;

