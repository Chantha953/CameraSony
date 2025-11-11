import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const InfoLayout = () => {
    const [activeLink ,setActiveLink] = useState(null);
    // const navigation = [
    //     {id : 1 , link : "My Profile" , icon : <i class="fa-regular fa-user"></i>},
    //     {id : 2 , link : "My Order" , icon : },
    //     {id : 3 , link : "Sign out"}
    // ];
  return (
    <div className="container">
      <aside style={{transform : "translateY(6rem)"}}>
        <nav>
            <ul className='text-white'>
                {navigation.map((url)=>(
                    <li className='list-unstyled'><Link className='text-decoration-none text-white'>{url.link}</Link></li>
                ))}
            </ul>
        </nav>
      </aside>
    </div>
  )
}

export default InfoLayout;
