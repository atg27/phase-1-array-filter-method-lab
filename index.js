function findMatching (inputArray, inputName) {
    return inputArray.filter(matches => matches.toUpperCase() === inputName.toUpperCase());
}


// function filterItems(arr, query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1

function fuzzyMatch(inputArray, inputName) {
    return inputArray.filter(matches => matches.toLowerCase().indexOf(inputName.toLowerCase()) === 0);
}

function matchName(inputArray, inputName) {
    return inputArray.filter(matches => matches.name === inputName);
}