import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Nav = () => {
    const { companies, widgets } = useSelector(state => state)

    return (
        <nav>
            <Link to='/companies' >Companies ({ companies.length })</Link>
            <Link to='/widgets' >Widgets ({widgets.length})</Link>
            <Link to='/widgets/create' >Create Widget </Link>
        </nav>
    );
}

export default Nav;