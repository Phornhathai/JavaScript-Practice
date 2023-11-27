//1.สร้าง array ที่เก็บตัวอักษร a - z เก็บไว้ก่อน
//2.สร้าง function รับค่าที่เข้ารหัส
//3.แยกตัวอักษร
//4.หาตำแหน่งของตัวอักษรที่แยกก่อนหน้านี้ใน array a-z


let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let ansFinal = [] //เก็บตัวอักษรที่เป็นคำตอบไว้

function decrypt(str) { //str = xvo
    let splitStr = str.split('')

    for (const s of splitStr) {
        if(s != ' '){
            // i = #1 = x,#2 = v, #3 = o
            let inputIndex = arr.indexOf(s);
            let nextIndex = inputIndex + 5;
            let nextValue = arr[nextIndex];
            if (nextValue) { //เมื่อ nextIndex ยังหาเจอ เพราะยังไม่เลย z เราสามารถตอบได้เลย
                ansFinal.push(nextValue);
            } else { //เมื่อ nextIndex หาไม่เจอ เพราะเลย z ไปแล้ว
                //รู้ว่าจำนวนอักษรมี 26 ตัว
                //ต้องหา inputIndex อยู่ index ที่เท่าไร
                let numOfEnd = (arr.length - 1) - inputIndex;
                let newLoop = 5 - numOfEnd; // ได้ตำแหน่งที่ 3 
                let ans = arr[newLoop - 1]; //index เริ่มที่ 0 เลยต้อง -1 จะได้ตำแหน่ง 3 
                ansFinal.push(ans);
            }

        }else{
            ansFinal.push(s)
        }
        
    }
    let answer = ansFinal.join("")
        return console.log(answer);
}

    // decrypt("xvo")
decrypt("ht ivhz dn w");