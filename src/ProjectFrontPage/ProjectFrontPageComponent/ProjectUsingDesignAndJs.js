import React from 'react';
// import "./ProjectFrontPage.css";
// import "./ProjectFrontPage2.css";
function ProjectsUsingDesignAndJS() {
    return (<div className='ComponentHeading'>
        <h1 className='heading'>These are the Projects using Design and JS</h1>
        {/* <div className='grid-container' >
            <a className="grid-item" href='https://msrajpoot1000.github.io/Tik-Tak-Toe/'>Tick Tac Toe</a>
            <a className="grid-item" href='https://msrajpoot1000.github.io/PasswordChecker/'>Password Checker</a>
            <a className="grid-item" href='https://msrajpoot1000.github.io/change_color_page/'>Random Color Generator </a>
            <a className="grid-item" href='#'>Api Checker</a>
        </div> */}

        <main class="main">
            <div class="projects-container">
                <a href="https://msrajpoot1000.github.io/Tik-Tak-Toe/" target="_blank">
                    <div class="project">
                        <img src="https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU" />
                        <div class="project__content">
                            <h2>Tic-Tak-Toe</h2>
                        </div>
                    </div>
                    <div class="project-name">
                        Tic-Tak-Toe
                    </div>
                </a>
                <a href="https://msrajpoot1000.github.io/PasswordChecker/" target="_blank">
                    <div class="project">
                        <img src="https://cdn.pixabay.com/photo/2017/03/23/12/56/security-2168233_640.jpg"
                            alt="space-02" />
                        <div class="project__content">
                            <h2>Password Checker</h2>
                        </div>
                    </div>
                    <div class="project-name">
                        Password Checker
                    </div>
                </a>
                <a href="https://msrajpoot1000.github.io/change_color_page/" target="_blank">
                    <div class="project">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMPijaLpfmxf6S9x-3fL-rKgGF8qvP7TKKw&usqp=CAU"
                            alt="space-02" />
                        <div class="project__content">
                            <h2>Random Color Changer</h2>
                        </div>
                    </div>
                    <div class="project-name">
                       Random Color Changer
                    </div>
                </a>
            </div>
        </main>



    </div>)
}
export default ProjectsUsingDesignAndJS;