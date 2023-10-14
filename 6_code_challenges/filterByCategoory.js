function filterByProperty(objects, propertyName, propertyValue) {
 const objectMap = objects.map(item => {
    console.log("item", item)
    let property = propertyName
    if (item.property ===  propertyValue) {
        return item
    }
 })
// console.log("objects", objects)
// console.log("propertyName", propertyName)
// console.log("propertyValue", propertyValue)

}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);