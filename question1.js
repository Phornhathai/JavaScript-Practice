//define function
//เข้าถึงแต่ละตัวอักษรด้วย index 
//s[index] ใช้ length ในการเข้าถึงจำนวนตัวอักษรที่ส่งค่าเข้ามาใน function
function findeLastChar(params) {
    let lastChar = params[params.length-1]
    return console.log(lastChar);
}

// const findeLastChar = (params) =>{
//     let lastChar = params[params.length-1]
//     return console.log(lastChar);
// }

//Call functions
findeLastChar("westride")
findeLastChar("zoo")
findeLastChar("student")
findeLastChar("ex")