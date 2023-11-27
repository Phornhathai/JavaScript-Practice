//สร้าง array มาเก็บค่าเพื่อเปรียบเทียบความแตกต่างของเศษ mod
const input = [39,40,41,42,43,44,82,83,84,85]
let count = 0
let reminder = []

input.forEach(num =>{
    const r = num % 42
    //ถ้า reminder มีของตัวแปร r หรือไม่ ถ้าเจอก็จะเป็น true แต่ถ้า set เป็น false คือ มันไม
    //currentNumber = [ 39, 40, 41, 0, 1, 2, 40, 41, 0, 1 ]
    if(!reminder.includes(r)){
        count++
    }  
        reminder.push(r)
    
})

console.log(count);

// reminder.forEach(currentNumber =>{
//     //currentNumber = [ 39, 40, 41, 0, 1, 2, 40, 41, 0, 1 ]
//     let isUnique = true
//     uniqueNumbers.forEach(uniqueNum =>{
//       if(currentNumber === uniqueNum){
//         isUnique = false
//       }  
//     })
//     //ถ้าหาของใน uniqueNumbers ไม่เจอก็จะใส่ของเข้าไป
//     if(isUnique) uniqueNumbers.push(currentNumber)
// })



// console.log(uniqueNumbers.length);

