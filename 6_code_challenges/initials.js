function extractInitials(names) {
  const initialsArray = []
  names.map(item => {
    const nameParts = item.split(" ")
    let initials = ""
    nameParts.map(namePart => {
        initials += namePart.charAt(0)
    })

  })
  initialsArray.push(initials)
  };

const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']
//loop through array
//split them at the first lettter
//push letter to new array
//join them