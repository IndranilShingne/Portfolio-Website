import React from 'react';
import { Link } from 'react-router-dom';
let Profiles=()=>{
    return(
        <>
        <nav className='parent'>
        <ul>
        <li id='Home-Page-at-NavBar'><Link to="/" >Home</Link></li>
     </ul>
    </nav>
    <div className='card'>
    <h1 id='secondPage'>Indranil's Profile</h1>
    <hr/>
    <div className='links2'>
    <ul>
    <li><a href="https://github.com/IndranilShingne" target="_blank">Git-hub</a></li>
    <li><a href="https://www.hackerrank.com/shingnenil" target="_blank">Hacker-rank</a></li>
    <li><a href="https:/linkedin.com/in/indranil-shingne" target="_blank">Linked-in</a></li>
    <li><a href="https://leetcode.com/Indranil-Shingne/" target="_blank">Leet-code</a></li>
    </ul>
    </div>
  </div>
  <footer>
  <p>&copy; 2023 My Website. All rights reserved.</p>
</footer>
  </>
    )
}
export default Profiles;