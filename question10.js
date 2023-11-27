//1.สร้าง array ที่เก็บตัวอักษร a - z เก็บไว้ก่อน
//2.สร้าง function รับค่าที่เข้ารหัส
//3.แยกตัวอักษร
//4.หาตำแหน่งของตัวอักษรที่แยกก่อนหน้านี้ใน array a-z


let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arrAns = []
function encrypt(str){
    let slitedStr = str.split('')
    for (const s of slitedStr) {

        if(s != ' '){

            // s - 5 = คำตอบ
            let inputIndex = arr.indexOf(s);
            // หาตำแหน่งของ s ด้วย inputIndex - 5
            let indexAns = inputIndex - 5;
            let ansValue = arr[indexAns];
            if(ansValue){
                //หาค่าเจอ
                arrAns.push(ansValue)
            }else{
                //หาค่าไม่เจอ
                let numOfStart = inputIndex 
                let newLoop = 5 - numOfStart // จำนวนตำแหน่งที่ต้องนับจาก z 
                let indexAns = (arr.length) - newLoop
                let ans = arr[indexAns]
                arrAns.push(ans)
            }
        }else{
            arrAns.push(s)
        }
    }
    let result = arrAns.join('')
    return console.log(result);
}

// encrypt("cat");
encrypt("my name is b")