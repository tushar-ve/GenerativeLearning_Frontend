import React, { useContext } from 'react'
import Navbar from '../Header/Navbar'
import './Body.css'
import { FaSearch } from "react-icons/fa";
import image from "../assets/images/Lovepik_com-611139503-Professional theme programmer cartoon illustration.png";
import image2 from "../assets/images/complete-guide-to-software-testing-automation-thumbnail.png"
import Cards from './Cards';
import Footer from '../Footer/footer';
import AuthContext from '../Context/AuthContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Quiztab from '../Tabs/Quiztab';
const Body = () => {

  const { user } = useContext(AuthContext)
  return (
    <>

      {user ? (<Quiztab />
      ) : (
        <>
          <div className='body1'>
            <div>
              <div className="header-container">
                <h3 className='head3'>
                  <span>Test Your </span>
                  <span style={{ marginLeft: "39px" }}>Capabilities </span>
                  <span className='para'>Learn from your own mistakes...</span>

                  <div className='search-container'>
                    <input type='text' placeholder='search...' name='name' style={{ marginLeft: "198px" }} /><span style={{
                      marginLeft: "-40px", marginTop: '8px'
                    }}><FaSearch className='search-icon' /></span>
                  </div>
                </h3>
              </div>

            </div>
            <div style={{ marginLeft: "261px" }}>
              <img className='image1' src={image} alt="ux-design" />
            </div>
          </div>
          <div style={{ marginLeft: '106px', marginRight: '66px' }}>
            <div className='card2'>
              <h3 className='video'>Popular Videos</h3>
              <div style={{ display: 'flex', flex: 'row', marginLeft: "100px", justifyContent: 'space-evenly' }}>

                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />
                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />
                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />

                <Cards
                  menuName="Menu 1"
                  description="Description of Menu 1 mbjhedjkhdfi f sjishjkchsdbcjkhdsfkcheukshdbfjkchxikshd,cnkdhsjkcsdjnckdjhfiusbj "
                  imageUrl={image2}
                />


              </div>
            </div>
          </div>
        </>
      )}



      <Footer />
    </>
  );
};

export default Body
