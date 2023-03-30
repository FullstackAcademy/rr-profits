import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Companies = () => {
    const { companies } = useSelector(state => state)
    const { id } = useParams();

    return (
       <ul>
        { companies.map( company => {
            return(
                <li key={ company.id } className={company.id === id ? 'selected' :'' } >
                    <Link to={ `/companies/${company.id}`}>
                    { company.name }
                    </Link>
                </li>
            )
            })
        }
       </ul>
    );
}

export default Companies;