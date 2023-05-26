import React from "react";
// import "./ProjectFrontPage.css";
function ProjectUsingReactAndBackend() {
    return (
        <div className='ComponentHeading'>
        <div>
                <h1 className='heading'>These Project are using React And Backend</h1>
            </div>
            {/* <div className='grid-container'>
                <a className='grid-item' href="https://frontend7.onrender.com">Food Ordering Website</a>
            </div> */}
             <main className="main">
                    <div className="projects-container">
                        <a href="https://frontend7.onrender.com" target="_blank">
                            <div className="project">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-BJGn1dkPow1rusC6ECKneSLYkh8Lbk-7Q&usqp=CAU"
                                    alt="space-02" />
                                <div className="project__content">
                                    <h2>Food Ordering Website</h2>
                                </div>
                            </div>
                            <div className="project-name">
                              Food Ordering Website
                            </div>
                        </a>
                        
                    </div>
                </main>
        </div>
    )
}
export default ProjectUsingReactAndBackend;