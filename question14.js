const input = "DdfsdjfkDFF"

let haveCapitalLetter = false
let haveSmallLetter = false

function isLowerCase(str){
    return str.toLowerCase() === str;
}

function isUpperCase(str){
    return str.toUpperCase() === str;
}

input.split('').forEach((letter) =>{
    if(isLowerCase(letter)){
        haveSmallLetter = true
    }
    if(isUpperCase(letter)){
        haveCapitalLetter = true
    }
})

if(haveCapitalLetter && haveSmallLetter){
    console.log("Mix");
}else{
    if(haveCapitalLetter){
            console.log("All Captital Letter");
    }
    if(haveSmallLetter){
            console.log("All Small Letter");
    }
}
