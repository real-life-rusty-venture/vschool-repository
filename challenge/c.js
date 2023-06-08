// const people = [ "John", "Adam", "Amber" ]
// function peopleElements(arr) {
//     arr.map(item) {
//         return `<h1>${item}</h1>`
//     }
// }
// console.log(peopleElements(people))
const people = ["John", "Adam", "Amber"]
function peopleElements(arr) {
    arr.map(item => console.log(`<h1>${item}</h1>`))
}
console.log(peopleElements(people))