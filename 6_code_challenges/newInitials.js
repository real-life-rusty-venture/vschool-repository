function extractInitials(names) {
    const initArray = []
    names.map(item => {
        const nameParts =  item.split(" ")
        let initials = ""
        nameParts.map(namePart => {
            initials += namePart.charAt(0)
        })
        initArray.push(initials)
    })
    return initArray
}
  const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
  const initialsArray = extractInitials(fullNames);
  console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']
  