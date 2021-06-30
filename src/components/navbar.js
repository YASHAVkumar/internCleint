import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
return (
  <div>
    <ul>
       <li>
        <a href="/">Home</a>
       </li>
       <li>
         <a href="/login">login</a>
        </li>
        <li>
            <a href="/register">register</a>
        </li>
    </ul>
  </div>
)
}

export default Navbar;