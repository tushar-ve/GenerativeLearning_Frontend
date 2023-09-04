import React from 'react'
import './New.css'
import CloseIcon from '@mui/icons-material/Close';
const New = () => {

  const arr = [
    "HTML",
    "JavaScript",
    "CSS",
    "PHP",
    "C++",
    "JAVA",
    "Python",
    "C#",
    "DSA",
    "Quiz",
    "Aptitude",
    "DBMS",
    "Algorithms",
    "React.js",
  ];
 

  return (

       <div >
         <h4 className='topic3'>Topics</h4>

          <div className="categories">
            <ul className="sidebar-nav-links">
              {arr.map((category) => {
                return (
                  <li>
                    <p className='p1'>{category} <CloseIcon /></p>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="sidebar-btn">more...</button>
        </div>

  )
}

export default New
