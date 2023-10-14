function sortByProperty(objects, propertyName, propertyValue) {
    const objectMap = objects.map(item => {
        if (item[propertyName] === propertyValue) {
            console.log(item)
        }
    })
}


const people = [
    { name: 'Alice', age: 30, country: 'USA' },
    { name: 'Bob', age: 25, country: 'Canada' },
    { name: 'Charlie', age: 35, country: 'USA' },
    { name: 'David', age: 28, country: 'Australia' },
  ];
  
  const filteredByCountry = sortByProperty(people, 'country', 'USA');
  console.log(filteredByCountry);