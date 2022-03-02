// Code your solution here
// function findMatching(elements){
//     return elements >10;
// }
// const filterNum = elements.filter(findMatching)
// console.log(filterNum);

function findMatching(drivers, name){
    return drivers.filter(nam => nam.toUpperCase() === name.toUpperCase()) 
}

function fuzzyMatch (drivers,letters){
    return drivers.filter(nam => nam.substring(0, 2) === letters)
}

function matchName(drivers, name){
return drivers.filter(nam => nam.name === name)
}