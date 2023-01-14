import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../../Context/useContext';
import useDynamicTitle from '../../Hooks/useDynamicTitle';
import Country from './Country';

const Countries = () => {

    useDynamicTitle("All");
    
    const [region, setRegion] = useState();
    const [name, setName] = useState();
    const [countries, setCountries] = useState();
    const [loading, setLoading] = useState(false);

    const { toggleTheme } = useContext(ContextAPI);


    const handleNameForm = e => {
        e.preventDefault();
        const name = e.target.submit.value;
        setName(name);
        e.target.reset();
    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => {
                setCountries(data)
                setLoading(false)
            })
    }, [])



    useEffect(() => {

        if (name) {
            console.log(name);
            setLoading(true)
            fetch(`https://restcountries.com/v3.1/name/${name}`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data)
                    setLoading(false)
                })
        }
        setLoading(false)

    }, [name]);

    useEffect(() => {
        // Selected Region
        if (region === "All") {
            setLoading(true)
            fetch(`https://restcountries.com/v3.1/all`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data)
                    setLoading(false)
                })

        }


        else if (region) {
            setLoading(true)
            fetch(`https://restcountries.com/v3.1/region/${region}`)
                .then(res => res.json())
                .then(data => {
                    setCountries(data)
                    setLoading(false)
                })
        }
    }, [region])

    return (
        <div className='my-8'>
            <div className='lg:flex justify-between items-center my-4 lg:px-0 md:px-0 px-2'>
                <div className="relative my-4">
                    <form onSubmit={handleNameForm}>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input name="submit" className={`${toggleTheme ? "bg-primary border-none" : "bg-white border-gray-200"} border text-sm  block lg:w-96 w-[90%] pl-16 p-2.5 rounded`} placeholder="Search for a country..." />
                    </form>
                </div>
                <select onChange={(e) => setRegion(e.target.value)} className={`select border w-60 rounded ${toggleTheme ? "bg-primary text-base-100" : "border-gray-200"}`}>
                    <option disabled selected>Filter by Region</option>
                    <option>All</option>
                    <option>Africa</option>
                    <option>Americas</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>Oceania</option>
                </select>
            </div>
            <div className='flex justify-center items-center'>
                {
                    loading && <div className='w-20 h-20 border-8 border-dotted border-secondary rounded-full animate-spin'></div>
                }
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-16 md:gap-10 sm:gap-8 gap-8 md:px-20 lg:p-0 sm:px-10 px-10'>
                {
                    countries?.length > 0 && countries?.map((country, i) => <Country key={i} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;