import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to='/search'>Search Here</Link>
                </div>
                <div>
                    <Link to='/characters'>Filter By...</Link>
                </div>
            </ul>
            <hr/>
        </nav>
    )
}
export default Navbar