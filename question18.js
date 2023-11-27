// oooo* i = 4
// ooo** i = 3
// oo*** i = 2
// o**** i = 1
// ***** i = 0


const input = 5

for (let i = input - 1; i >= 0; i--) {
    let a = ""
    for (let j = 0; j < i; j++) {
        a += " "
    }
    for (let k = input - i; k > 0; k--) {
        a += "*"
    }
    console.log(a);
}

