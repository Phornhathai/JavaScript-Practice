// input 18 -> output 18/3 = ได้เศษ 0 , 18/11 = ได้เศษ 7
const input = 23

// for (let i = 0; i <= input; i = i + 3) {
//     console.log(i); 
//     count++
// }
// for (let i = 0; i <= input; i = i + 11) {
//     console.log(i); 
//     count1++
// }



function findReminder(input , divider){
    let count = 0
    for (let i = 0; i <= input; i = i + divider) {
        // console.log(i); 
        count++
    }
    return input - (count - 1) * divider;
}

console.log(findReminder(23,4));