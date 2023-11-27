//สร้าง function
//สามารถเข้าถึงตัวอักษรของแต่ละตัวได้
//สร้าง array ขึ้นมาใหม่
//.push ทำแบบนี้ไปจนครบ

//method 

function makeArr(str) {
    let arr = []
    for (const e of str) {
        // console.log(e);
        arr.push(e)
    }
    return console.log(arr);
    // return console.log(str.split(""));
}

makeArr("Zoo")
// makeArr("WeStride")