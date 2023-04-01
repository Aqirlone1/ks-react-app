import React from "react";
import './Courses.css'

const Courses = props => {

return(
  <>
   <div className="flex-container">
   <img className="arrowOne" src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="Arrow"/>
    <div className="card">
     <img src="" alt='brain'/>
     <h1> Athwas </h1>
     <p>class 10th</p>
     <p>60+ lactures</p>
     <p>JKBOSE/CBSE</p>
     <p>complete Maths & Science</p>
     <button className='button'>Explore Courses</button>
    </div>
    
    <div className="card">
     <h1> Aash </h1>
     <p>JKSSB</p>
     <p>1000+ Questions</p>
     <p className='paragraph'>complete General Science & Computer Science</p>
     <button className='button'>Explore Courses</button>
    </div>

    <div className="card">
     <h1> Aash </h1>
     <p>JKSSB</p>
     <p>1000+ Questions</p>
     <p className='paragraph'>complete General Science & Computer Science</p>
     <button className='button'>Explore Courses</button>
    </div>
    <img className="arrowSecond" src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="Arrow"/>
   </div>
  </>
)
}
export default Courses
