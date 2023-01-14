import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../../Context/useContext';

const Country = ({ country }) => {
    const { toggleTheme, setToggleTheme } = useContext(ContextAPI);
    const { name, flags, capital, population, region, ccn3 } = country;
    return (
        <Link to={`/name/${name.common}`} className={`card card-compact shadow rounded ${toggleTheme ? "bg-primary text-base-100" : "bg-base-100"}`}>
            <figure><img className='w-full lg:h-40 md:h-48' src={flags.png} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name.common}</h2>
                <p className='font-bold'>Population: <span className='font-normal'>{population}</span></p>
                <p className='font-bold'>Region: <span className='font-normal'>{region}</span></p>
                <p className='font-bold'>Capital: <span className='font-normal'>{capital}</span></p>
            </div>
        </Link>
    );
};

export default Country;