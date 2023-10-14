const { object } = require("webidl-conversions");

function filterByProperty(objects, propertyName, propertyValue) {
  // console.log(objects)
//  const objectMap = objects.map(item => {
//     let property = propertyName
//     // console.log("property", property)
//     if (item.property === propertyValue) {
//         return item
//     }
//  })
//  console.log("objectMap", objectMap)
//  return objectMap

  // filter and return/display objects with certain property
  // setp one: filter for property
  // step two: return/log the new array
  // let newArray = objects.filter( function (el) {
  //   return el.country === propertyValue
  // })
  //  return newArray
  const objectMap = objects.map( item => {
    if( item[propertyName] === propertyValue ) {
       console.log( item )
    }
  })
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);