import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlink = () => {
    return (
        <>
        <ul>
           <li> <NavLink to='/kishore' activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>About </NavLink>
            </li>
            <li>
            <NavLink to='/surya' activeStyle={{
                fontWeight: "bold",
                color: "red",                
            }}>Contact </NavLink>
            </li>
            <li>
            <NavLink to='/kavya' activeStyle={{
                fontWeight: "bold",
                color: "red"
            }}>Rates</NavLink>
            </li>
            </ul>
        </>
    )
}

export default Navlink;