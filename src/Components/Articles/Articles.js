import React from "react";
import "./Articles.css";
const Articles = () => {
  const Subjective = [
    {
      name: "Java",

      publishdate: "26/08/2023",

      details:
        "Java is a write-once, run-anywhere programming language developed by Sun Microsystems. It is similar to C and C++ but a lot easier. You can combine Java with a lot of technologies like Spring, node js, Android, Hadoop, J2EE, etc… to build robust, scalable, portable and distributed full-fledged applications. It is similar to C and C++ but a lot easier. You can combine Java with a lot of technologies like Spring, node js, Android, Hadoop, J2EE, etc… to build robust, scalable, portable and distributed full-fledged applications.",
    },

    {
      name: "Python Struggle",

      publishdate: "23/09/2020",

      details: `Dating from 1991, the Python programming language was considered a gap-filler, a way to write scripts that “automate the boring stuff” (as one popular book on learning Python put it) or to rapidly prototype applications that will be implemented in other languages.
      However, over the past few years, Python has emerged as a first-class citizen in modern software development, infrastructure management, and data analysis. It is no longer a back-room utility language, but a major force in web application creation and systems management, and a key driver of the explosion in big data analytics and machine intelligence`,
    },

    {
      name: "Working Structure",

      publishdate: "20/07/2022",

      details:
        "A functional workplace structure is organized around specific job functions. This structure groups employees together by the duties they perform within the organization. Leaders and employees are categorized by departments. Within this workplace structure, each worker performs duties according to his area of expertise.  This structure groups employees together by the duties they perform within the organization. Leaders and employees are categorized by departments. Within this workplace structure, each worker performs duties according to his area of expertise.",
    },

    {
      name: "Data Science",

      publishdate: "20/07/2022",

      details:
        "Discoverdatascience.org has a goal to provide the most current and accurate information about the field of data science.  We aim to provide a wide range of resources for students to learn about this rapidly growing arena. In addition to providing comprehensive listings of programs at all educational levels (Minors, Majors, Masters, PhD, Certifications, & Bootcamps), we also aim to address commonly asked questions related to data science. The articles we have listed below were compiled and written by data science professors, experts, and practitioners within the field as well as based on professional research of the industry and related trends, opportunities, and projections.",
    },

    {
      name: "C++",

      publishdate: "20/07/2022",

      details:
        "C++ is one of the most well-known and well-used programming languages today, used by more than four million programmers worldwide. The language made its debut in 1985 as an iteration of the C programming language. It began as an extension of C but evolved into a different language with distinctive characteristics and features. C++ is a scalable, object-oriented language, perfect for large, scalable applications thanks to its discrete and direct memory management capabilities and low-level machine functions. Additionally, C++ has the advantage of being both an object-oriented and a procedural language, something very few other languages can boast of.",
    },
  ];

  // return (
  //   <div className="virt">
  //     {Subjective.map((data, index) => {
  //       return (
  //         <div class="card4" key={index}>
  //           <div class="content2">
  //             <p class="heading9">{data.name}</p>
  //             <p class="para3">{data.details}</p>
  //             <button class="btn7">Read more</button>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <div className="article-container">
      {Subjective.map((data, index) => {
        return (
          <div class="article-content" key={index}>
            <div class="article">
              <h1 class="article-heading">{data.name}</h1>
              <p class="article-para">{data.details}</p>
              <button class="article-btn">Read more</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
