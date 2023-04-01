import React from "react";
import './Courses.css'

const Courses = props => {

return(
  <>
   <div className="flex-container">
   <img className="arrowOne" src="https://cdn-icons-png.flaticon.com/128/318/318476.png" alt="Arrow"/>
    <div className="card">
     <img className="image_top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADwDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAYAAwUCAQf/xAAzEAACAQIDBAcIAgMAAAAAAAABAgMAEQQSIQUxUYEGEyJBYXGRFDJCobHB0fAjJTSCov/EABkBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EACURAAICAQMDBQEBAAAAAAAAAAECAAMRBAUSISJBEyMxUXFhsf/aAAwDAQACEQMRAD8A+41KlD47EjC4dpLXY6IvE1VmCKWb4EkAk4E6nxUGHIE0gUncN59KDbbWGDWRJZF7nQCx8rmsKaSSaY9YxZmHae+oH28OdeM4Uk/Ai3b98qQW7vYT7YwIemkXHcYzYfaGHnheUOEWNsr9YQMp03+oolWV1DIwZTqCDcGk3Aqw2dHqVM0rzsP+Ry0b1qz299nBcREzdWJAJEG5wTY6ceB8OFFLunF1SweBk/0zI6bKllMb6lDbPx0G0MOJ8MxK3sQRYqeBommwIYZEFIx0MlLe1cSMXimQNdItEB3HifHXTlW3tKdsPgpJI/f0APC5Av8AOlZ13LITlB0a+vlfu86T7vqOKioeep/IXpK8nmZ2gYMxYDU6EGhcSSMN2A3XT9lAPjZtw/eFXyB8li4IJAPZ1sTbjV2zl63bEMdyY8ODM5PcLEAepB5Ul09fq2qn2YbY3FSZ3jVC4gJGi5YEWFO4AKOHmTyrOxxI2W5sNwIF92ot6UTM5ZmlMdpJDctYaEn7Xobaq2wWRXVRcdkj3rHdU22epcX+zIVeKYhvQnEMJ8ThjbKyiQDgRofqPSm2kroWf7aUHecOxHh2lv8AanWul28504i3UD3DM7bv+CL+7nAbnp9SKX2LojDKX0Njvv50zbVhOIwEsajMbBsvGxBtztSyFYZXU5xbcT9D+aU7wpFyt4IhekPYRPMvushLIPhv++lWYCQRjabpq0pSFWJvY2Ob5faqZTZJZInyOFJsRpfiRXGz1aPAQ9klnzSPra5JsLf6qp50Fp2NfKwfIH+9JtYOWFlsjKGVZWUCxJvoD+/asXaUiSYgiOYui2ACm4HHdReNxjiB40wjx57jNJYC/K9ZoLWAyk+JIqta46yWMYehCA4/EyBmGWIKFN+1c7+VvnTlS70NwRiwcmLkFnnNl8FH5N/QUxV1GiQrQoMWXHLmSsfaeys5M2FXtb2QG1zxH43H67FStL6EvTi4lUdkORPn2NxUsj+yQ6szBDmUqwYndbju4UfPNFhlIu4iWyI4XNdQLLu8AKbjBC0wmMSGVRYOVGYDzrNn6P4OZmOedEY3MaP2b8x8qVWbUwTih8/kKXVDllhEfEymaUhcTJIo3ZgBblajNg7Jl2jikVlf2SM/yPawIHwg95O7Td6U2w9HtlxG/s3WHv6xywPIm3yrTijSGNY4kVEUWCqLAcq0o2wqQbD0+pV9TkdskaJFGscahUUBVUDQAd1dVKlN4JP/2Q==" alt='brain'/>
     <h1> Athwas </h1>
     <p>class 10th</p>
     <p>60+ lactures</p>
     <p>JKBOSE/CBSE</p>
     <p>complete Maths & Science</p>
     <button className='button'>Explore Courses</button>
    </div>
    
    <div className="card">
    <img className="image_top" src='https://cdn-icons-png.flaticon.com/512/2779/2779262.png' alt='bulb'/>
     <h1> Aash </h1>
     <p>JKSSB</p>
     <p>1000+ Questions</p>
     <p className='paragraph'>complete General Science & Computer Science</p>
     <button className='button'>Explore Courses</button>
    </div>

    <div className="card">
      <img className="image_top" src='https://cdn-icons-png.flaticon.com/128/3145/3145765.png' alt='book'/>
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
