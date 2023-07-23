import React from "react";
import DataMining from "./dataMining";
// "The user should be able to enter tLast in the badge fields"  what
export default function Carrd(props) {
    console.log(props, "this is props ffrom card lolllll")
    const card = {
        border: "2px solid black",
        margin: "150px",
        // justifyItems: "space-between",
        // paddingRight: "20px" this doesnt work
        //marginRight marginLeft paddingRight and paddingLeft just will not work
        //doesnt matter where i use them
        // paddingLeft: "150px" //maybe this is the part that messed my whole card up LOL
    }
    const header = {
        backgroundColor: "black",
        color: "white"
    }
    const matrix = {
        border: "1px solid black"
    }
    return props.data.showIt && (
        <div style = {card}>
            <header style = {header}>
                <p>badge</p>
            </header>
            <p>name: {props.posty.firstName}</p>
            <p>place of unfortunate birth: {props.posty.lastName}</p>
            <p>email: {props.posty.email}</p>
            <p>phone: {props.posty.phone}</p>
            <p>food: {props.posty.food}</p>
            <div style = {matrix}>
                <p>dumb whatever {props.posty.rambling}</p>
            </div>
            <p>idk</p>
        </div>
    )
}