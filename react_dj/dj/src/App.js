import logo from './logo.svg';
import './App.css';
import Skwrs from './skwrs';
import React from 'react';
import SmallTime from './small_time';
import boxy from './boxy';
import PartyTime from './party';
import LeftBlue from './bottom_left_blue';
import RightBlue from './bottom_right_blue';
export default function App() {
  const [colorH, setColorH] = React.useState("white")
  const [flipper, setFlipper] = React.useState(true)
  function mcr() {
    setFlipper(prev => !prev)
}
  const [boxes, setBoxes] = React.useState(boxy)
  function smallTimeBoxes() {
    setBoxes(flipper ? ["black", "black", "black", "black", "black", "black", "black", "black"] : ["white", "white", "white", "white", "white", "white", "white", "white"])
  }
  const boxMap =  boxes.map(item => {
    return (
      <Skwrs color = {item.color} id = {item.id} toggle = {toggle} key = {item.id}></Skwrs>
    )
  })
  function toggle(id, color) {
    console.log(id)
    console.log("id is logging lol")
    setBoxes(prev => {
      let switcher = color === "black" ? "white" : "black"
      return prev.map(item => {
        return item.id === id ? {...item, color: switcher} : item
      })
    })
  }
  function toggler(id, color) {
    if (colorH === "white") {
      setColorH("black")
    } else { setColorH("white")}
    setBoxes(prev => {
      console.log(color, "this is color")
      let newColor = color === "white" ? "white" : "black"
      return prev.map(item => {
        return {...item, color: colorH}
      })
    })
  }
  function party(a, b, c, d) {
    console.log("party is firing")
    setBoxes(prev => {
      console.log("setting boxes as we speak")
      return prev.map(item => {
        console.log(item)
        console.log(a, b, c, d)
        return item.id <= d ? {...item, color: "purple"} : item
      })
  })
}
function blue(id) {
  setBoxes(prev => {
    return prev.map(item => {
      return item.id === id ? {...item, color: "blue"} : item
    })
  })
}
  return (
    <div className='skwrHolder'>
      <>{boxMap}</>
      <SmallTime toggler = {() => toggler(0, boxy[0].color)}></SmallTime>
      <PartyTime party = {() => party(0, 1, 2, 3)}/>
      <LeftBlue blue = {() => blue(6)}/>
      <RightBlue blue = {() => blue(7)}/>
    </div>
  )
}
//this is cleaned
//definitely works