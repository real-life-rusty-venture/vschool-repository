import React from "react"
import ProjectCard from "./ProjectCard"
export default function Projects() {
    const projects = [
        {
            img : "C:\Users\bensh\OneDrive\Pictures\Screenshots\art_project.png",
            title : "Art Website",
            description : "On this website I am looping over an api to display art made by people with various mental illnesses. This website includes a homepage, a navbar, a footer, and different pages for different mental illnesses.",
            viewLive : "",
            //learn how to do the viewLive
            viewCode : "https://github.com/real-life-rusty-venture/vschool-repository/tree/main/4_art_project/art"
        },
        {
            img : `C:\Users\bensh\OneDrive\Pictures\Screenshots\111111111111brock_sampson_rpg.png`,
            //code is not happy here
            title : "Brock Sampson Simulator",
            description : "using node.js and vanilla javascript string methods i have created a terminal RPG. In this RPG the user can talk to various NPCS, check their status along with the status of enemies, and most importantly fight the NPCs through fun randomized narration until the user either dies or defeats every NPC there is to fight.",
            viewLive : "",
            //learn how to do the viewLive
            viewCode : "https://github.com/real-life-rusty-venture/vschool-repository/blob/main/brock_sampson_simulator/brock_sfw.js"
        }
    ]
    const [projectData, setProjectData] = React.useState(projects)
    const projectMap = projectData.map(item => {
        return (
            <ProjectCard img = {item.img} title = {item.title} description = {item.description} viewLive = {item.viewLive} viewCode = {item.viewCode}/>
        )
    })
    return (
        <div>
            {projectMap}
        </div>
    )
}