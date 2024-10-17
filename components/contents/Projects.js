import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 w-full">
      <Project
        title="Cooperative Finance"
        tech="ReactJS, React Native"
        purpose="-"
        feature="-"
        url="/projects/project8.png"
        tag="Slicing UI"
      />

      <Project
        title="Task Management"
        tech="ReactJS, React Native, ExpressJS, MongoDB"
        purpose="Enable workers to manage their tasks on the go, enhancing productivity and ensuring timely completion."
        feature="Progress tracking."
        url="/projects/project1.png"
        tag="Web Mobile"
      />
      
      <Project
        title="Notes App"
        tech="NextJS, Clerk"
        purpose="Write notes, save links, and organize your thoughts in one place."
        feature="Real-time updates, archive notes."
        url="/projects/project7.png"
        tag="Web"
      />

      <Project
        title="Attendance App"
        tech="ReactJS, React Native, ExpressJS, MongoDB"
        purpose="Enable workers to manage their tasks on the go, enhancing productivity and ensuring timely completion."
        feature="Mark attendance using QR Code"
        url="/projects/project2.png"
        tag="Web Mobile"
      />

      <Project
        title="Inventory App"
        tech="React Native, ExpressJS, MongoDB"
        purpose="Allow worker to manage item data, such as adding, editing and deleting item data"
        feature="Item management."
        url="/projects/project3.png"
        tag="Mobile"
      />

      <Project
        title="Dicoding Notes"
        tech="ReactJS"
        purpose="Write notes, save links, and organize your thoughts in one place."
        feature="Features: Real-time updates, archive notes."
        url="/projects/project5.png"
        tag="Web"
      />

      <Project
        title="Image Gallery"
        tech="NextJs"
        purpose="A gallery of images that retrieve data from an API."
        feature="Search images."
        url="/projects/project6.png"
        tag="Web"
      />
    </div>
  );
};

export default Projects;
