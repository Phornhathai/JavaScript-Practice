//input 5
// *
// **
// ***
// ****
// *****

let a

function printStar(input) {

    // for (let i = 0; i < input; i++) {
    //     a += "*"
    //     console.log(a);
    // }

    for (let i = 1; i <= input; i++) {
        a = ""
        for (let j = 0; j < i; j++) {
            a += "*"
        }
        console.log(a);
    }

}

printStar(4)
