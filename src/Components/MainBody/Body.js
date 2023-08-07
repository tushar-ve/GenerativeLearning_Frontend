import React from 'react'
import Navbar from '../Header/Navbar'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import image from "../assets/images/Lovepik_com-611139503-Professional theme programmer cartoon illustration.png"
import Cards from './Cards';
const Body = () => {
  return (
    <>
      <Navbar />

      <div className='body1'>
      <div>
      <div className="header-container">
        <h3 className='head3'>
          <span>Test Your </span>
         <span style={{marginLeft:"39px"}}>Capabilities </span> 
          <span className='para'>Learn from your own mistakes...</span>
          <div className='search-container'>
        <input type='text' placeholder='search...' name='name' style={{marginLeft:"198px"}}/><span style={{
    marginLeft: "-40px", marginTop:'8px'}}><FaSearch className='search-icon' /></span>
      </div>
        </h3>
      </div>
      
      </div>
      <div style={{marginLeft:"261px"}}>
      <img className='image1' src={image} alt="ux-design" />
      </div>
      </div>
     
      <div style={{marginLeft:'106px', marginRight:'66px'}}>
      <div className='card2'>
      <h3 className='video'>Popular Videos</h3>
      <div  style={{display:'flex', flex:'row', marginLeft:"100px"}}>
      
      <Cards
        menuName="Menu 1"
        description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
        imageUrl={image}
      />
       <Cards
        menuName="Menu 1"
        description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
        imageUrl={image}
      />
       <Cards
        menuName="Menu 1"
        description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
        imageUrl={image}
      />
       <Cards
        menuName="Menu 1"
        description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
        imageUrl={image}
      />
       <Cards
        menuName="Menu 1"
        description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
        imageUrl={image}
      />
       
      
      </div>
      </div>
      </div>
    </>
  );
};

export default Body
