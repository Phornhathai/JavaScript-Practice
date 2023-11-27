const input = [4,6,7,2]
// [2,4,5,6,1,0,8]

//สร้างตัวแปร min มาเก็บค่าแรก แล้วเปรียบเทียบกับ index อื่น ถ้าค่า min ยังน้อยกว่าให้เก็บค่าที่ index นั้น แต่ถ้า min มากกว่า ให้เอาค่า index นั้นมาเก็บใน min แทน

//สร้างตัวแปร max แล้วเปรียบเทียบค่าอื่นๆ ถ้ามากกว่า max ให้เอาค่าของ index นั้นมาใส่ในค่า max

let min = input[0]
let max = input[0]

input.forEach(function (num) {
    console.log(num);
    if(num < min){
        min = num
    }
    if(num > max){
        max = num
    }
})

console.log("min -> ",min);
console.log("max -> ",max);