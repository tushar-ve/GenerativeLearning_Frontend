import React from 'react'
import './Articles.css'
const Articles = () => {

  const Subjective = [
    {
      name: "Java",
  
      publishdate: "26/08/2023",
  
      details: "Java is a write-once, run-anywhere programming language developed by Sun Microsystems. It is similar to C and C++ but a lot easier. You can combine Java with a lot of technologies like Spring, node js, Android, Hadoop, J2EE, etc… to build robust, scalable, portable and distributed full-fledged applications. It is similar to C and C++ but a lot easier. You can combine Java with a lot of technologies like Spring, node js, Android, Hadoop, J2EE, etc… to build robust, scalable, portable and distributed full-fledged applications.",
    },
  
    {
      name: "Python Struggle",
  
      publishdate: "23/09/2020",
  
      details: `Dating from 1991, the Python programming language was considered a gap-filler, a way to write scripts that “automate the boring stuff” (as one popular book on learning Python put it) or to rapidly prototype applications that will be implemented in other languages.
      However, over the past few years, Python has emerged as a first-class citizen in modern software development, infrastructure management, and data analysis. It is no longer a back-room utility language, but a major force in web application creation and systems management, and a key driver of the explosion in big data analytics and machine intelligence`,
    },
  
    {
      name: 'Working Structure',
  
      publishdate: "20/07/2022",
  
      details: "A functional workplace structure is organized around specific job functions. This structure groups employees together by the duties they perform within the organization. Leaders and employees are categorized by departments. Within this workplace structure, each worker performs duties according to his area of expertise.  This structure groups employees together by the duties they perform within the organization. Leaders and employees are categorized by departments. Within this workplace structure, each worker performs duties according to his area of expertise.",
    },
  
    
  ];

  return (
    <div className='virt'>

    {Subjective.map((data, index)=>{
      return(
        <div class="card4" key={index}>
  <div class="content2">
    <p class="heading9">{data.name}
    </p><p class="para3">
{data.details}
    </p>
    <button class="btn7">Read more</button>
  </div>
</div>
    
      )
    })

    }
    </div>
  )
}

export default Articles