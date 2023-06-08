import React from "react";
export default function NameList({data}){
  const namesLol = data.map(item => {
    console.log(data)
    console.log("idk")
    return (
      <div>{item.title}</div>
    )
  })
  console.log(namesLol)
  console.log("^^^^^thats the namesLol")
  return <div>{namesLol}</div>
}