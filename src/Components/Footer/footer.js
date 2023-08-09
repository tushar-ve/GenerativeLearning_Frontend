import React from 'react'
import {HiLocationMarker} from 'react-icons/hi';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css';
import Symbol from '../assets/images/Vector.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const iconStyle = {
    color: '#0076B2',   
    fontSize: 30,
    marginLeft:'3px', 
  };
  const iconStyle3 = {
    color: '#0076B2',   
    // fontSize: 30,
  };
  const iconStyle2={
    color:'red',
    fontSize: 30,
    marginLeft:'3px', 
  }
  return (
    <div className='footer'>
    <div className='leftSide'>
      <div><HiLocationMarker style={iconStyle3} />
      <span className='loc'>J38, Block J, Sector 63, Noida, Uttar Pradesh 201301</span></div>
      <div className='icons_footer'><FacebookIcon style={iconStyle} /><img src={Symbol} alt='/'/><YouTubeIcon style={iconStyle2}/> <LinkedInIcon style={iconStyle}/></div>
    </div>
    <div className='rightSide'>
      <div className='head'>
        <h4 className='heading'>Company</h4><span className='span1'>About US</span><span className='span1'>Carrer</span><span className='span1'>Legal</span><span className='span1'>Media</span><span className='span1'>Contact Us</span>
      </div>
      <div className='head'>
      <h4 className='heading'>Explore</h4><span className='span1'>Job-A-Thon For Freshers</span><span className='span1'>Weekly Contest</span><span className='span1'>Quizzes</span><span className='span1'>Tracking activity</span><span className='span1'>Score</span>
      </div>
      <div className='head'>
      <h4 className='heading'>Concepts</h4><span className='span1'>Data Structures</span><span className='span1'>Competitive Quiz</span><span className='span1'>Articles</span><span className='span1'>Tracking activity</span><span className='span1'>Score</span>
      </div>
      <div className='head'>
      <h4 className='heading'>Languages</h4><span className='span1'>Java</span><span className='span1'>C++</span><span className='span1'>Python</span><span className='span1'>C#</span><span className='span1'>C</span>
      </div>
    </div>
    </div>
  )
}

export default Footer
