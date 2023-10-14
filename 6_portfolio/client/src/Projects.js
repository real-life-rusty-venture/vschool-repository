import React from "react"
import ProjectCard from "./ProjectCard"
import brockSamson from "./brock_samson.png"
import artProject from "./art_project.png"

export default function Projects() {
    const divStyle = {
        paddingLeft : "90px",
        paddingRight : "150px",
        display : "grid",
        gridTemplateColumns : "1fr 1fr 1fr",
        gridTemplateRows : "2 1fr"
    }
    const projects = [
        {
            img : artProject,
            title : "Art Website",
            description : "On this website I am looping over an api to display art made by people with various mental illnesses. This website includes a homepage, a navbar, a footer, and different pages for different mental illnesses.",
            viewLive : "https://my-art-collection.onrender.com/",
            //learn how to do the viewLive
            viewCode : "https://github.com/real-life-rusty-venture/vschool-repository/tree/main/4_art_project/art",
            gridColumn : "1/2",
            gridRow : "1/2"
        },
        {
            // <img src="brock_samson.png" />
            img : brockSamson, 
            //code is not happy here
            title : "Brock Samson Simulator",
            description : "using node.js and vanilla javascript string methods, I have created a terminal RPG. In this RPG, the user can talk to various NPCS, check their status along with the status of enemies, and most importantly fight the NPCs through fun randomized narration until the user either dies or defeats every NPC there is to fight.",
            viewLive : "",
            //learn how to do the viewLive
            viewCode : "https://github.com/real-life-rusty-venture/vschool-repository/blob/main/brock_sampson_simulator/brock_sfw.js",
            gridColumn : "2/3",
            gridRow : "2/3"
        }
    ]
    const [projectData, setProjectData] = React.useState(projects)
    const projectMap = projectData.map(item => {
        return (
            <ProjectCard gridColumn = {item.gridColumn} img = {item.img} title = {item.title} description = {item.description} viewLive = {item.viewLive} viewCode = {item.viewCode} />
        )
    })
    return (
        <div style = {divStyle} >
            {projectMap}
        </div>
    )
}