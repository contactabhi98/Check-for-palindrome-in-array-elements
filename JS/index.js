
// To check array elements in a palidrome format.
function checkForPalidrome(arr) {
    let count = 0;
    console.log(Math.floor(arr.length / 2));
    for(let i = 0; i < Math.floor(arr.length / 2); i++) {
        if(arr[i] == arr[arr.length - 1 -i]) {
            count = count+1;
        }
    }
    if(count == Math.floor(arr.length / 2)) {
        return true;
    } else {
        return false;
    }
}

// Example usage
const myArray = [1,2,3,2,1];
console.log("checkForPalidrome",checkForPalidrome(myArray));



// This is also a valid
// To check any numbers in a palidrome format.
// function checkNumberForPalidrome(arr) {
//     let strArray = str.split('');
//     console.log(strArray);
//     let count = 0;
//     console.log(Math.floor(arr.length / 2));
//     for(let i = 0; i < Math.floor(arr.length / 2); i++) {
//         if(arr[i] == arr[arr.length - 1 -i]) {
//             count = count+1;
//         }
//     }
//     if(count == Math.floor(arr.length / 2)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// Example usage
const num = 123211
console.log("checkNumberForPalidrome",checkForPalidrome(num.toString()));

