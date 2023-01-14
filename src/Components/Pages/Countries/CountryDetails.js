import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ContextAPI } from '../../Context/useContext';

const CountryDetails = () => {
    const { toggleTheme, setToggleTheme } = useContext(ContextAPI);
    const data = useLoaderData();
    const countryDetails = data[0];
    const { name, flags, capital, population, region, ccn3, subregion, tld, currencies, languages, borders } = countryDetails;
    const language = Object.values(languages);
    const currency = Object.values(currencies);
    return (
        <div className={`lg:mt-20 my-10 ${toggleTheme ? "text-base-100" : ""}`}>
            <div className='flex flex-col lg:px-28 md:px-28 sm:px-20 px-10'>
                <div className='mb-20'>
                    <Link to="/" className={`${toggleTheme ? "bg-primary" : "bg-white"} rounded shadow px-6 py-1`}>⬅ Back</Link>
                </div>
                <div className='lg:flex lg:flex-row justify-between items-center md:flex md:flex-col gap-10'>
                    <img className='lg:h-96 lg:w-[550px] md:w-full sm:w-full w-full' src={flags.svg} alt="" />
                    <div className='flex flex-col gap-y-10'>
                        <div><h1 className='text-3xl font-bold lg:mt-0 md:mt-0 mt-5'>{name.common}</h1></div>
                        <div className='lg:flex md:flex w-full gap-x-20'>
                            <div className='flex flex-col gap-y-3'>
                                <h4 className='font-bold'>Native Name: <span className='font-normal'>{name.official}</span></h4>
                                <h4 className='font-bold'>Population: <span className='font-normal'>{population}</span></h4>
                                <h4 className='font-bold'>Region: <span className='font-normal'>{region}</span></h4>
                                <h4 className='font-bold'>Sub-Region: <span className='font-normal'>{subregion}</span></h4>
                                <h4 className='font-bold'>Capital: <span className='font-normal'>{capital}</span></h4>
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h4 className='font-bold'>Top Level Domain: <span className='font-normal'>{tld[0]}</span></h4>
                                <h4 className='font-bold'>
                                    Currencies: {currency?.map((crc, i) => <span key={i} className='font-normal mr-2'>{crc.name}</span>)}
                                </h4>
                                <h4 className='font-bold'>
                                    Languages: {language?.map((lng, i) => <span key={i} className='font-normal mr-2'>{lng}</span>)}
                                </h4>
                            </div>
                        </div>
                        <div>
                            <h4 className='font-bold'>
                                Border Countries: {borders?.map((border, i) => <span key={i} className={`font-normal mr-2 ${toggleTheme ? "bg-primary" : "bg-white"} rounded shadow px-3`}>{border}</span>)}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;