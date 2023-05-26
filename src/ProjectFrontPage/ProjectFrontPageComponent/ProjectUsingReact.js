import React from 'react';
// import "./ProjectFrontPage.css";
function ProjectUsingReact() {
    return (
        <div className='ComponentHeading'>
            <div>
                <h1 className='heading'>These Project are using React </h1>
            </div>
            {/* <div className='grid-container'>
                <a className='grid-item' href="https://msrajpoot1000.github.io/ToDO/">To Do List</a>
            </div> */}
              <main className="main">
                    <div className="projects-container">
                        <a href="https://msrajpoot1000.github.io/ToDO/" target="_blank">
                            <div className="project">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAESBlVVbykFnJlFNcH7WKRHMEYfbaRWZyg&usqp=CAU"
                                    alt="space-02" />
                                <div className="project__content">
                                    <h2>To Do List</h2>
                                </div>
                            </div>
                            <div className="project-name">
                               To Do List
                            </div>
                        </a>
                        
                    </div>
                </main>
        </div>
    )
}
export default ProjectUsingReact;