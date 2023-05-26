import React from "react";
import ProjectUsingHtmlCss from './ProjectFrontPageComponent/ProjectUsingHtmlCss';
import ProjectsUsingDesignAndJS from './ProjectFrontPageComponent/ProjectUsingDesignAndJs';
import ProjectUsingReact from './ProjectFrontPageComponent/ProjectUsingReact';
import ProjectUsingReactAndBackend from './ProjectFrontPageComponent/ProjectUsingReactAndBackend';
import NavbarTop from "../NavbarTop";
import NavbarTop2 from "../NavbarTop2";
// import ExtraPage from "./ProjectFrontPageComponent/ExtraPage.js";
// C:\Users\pc\Desktop\Web Development Project\project3\src\ProjectFrontPage\ProjectFrontPageComponent\ExtraPage.js
function ProjectFrontPage() {
    return (
      <div >
        <div ><NavbarTop /> </div>
      <div style={{margin:"30px 0px", border:"1px solid red"}}><ProjectUsingHtmlCss/> </div>
      <div style={{margin:"30px 0px", border:"1px solid red"}}><ProjectsUsingDesignAndJS /></div>
      <div style={{margin:"30px 0px", border:"1px solid red"}}> <ProjectUsingReact /></div>
        <div style={{margin:"30px 0px", border:"1px solid red"}}> <ProjectUsingReactAndBackend /></div> 
    </div>
    )
}
export default ProjectFrontPage;