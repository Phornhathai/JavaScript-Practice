//kemija
//kepemipijapa

//สร้าง function วนลูปรับตัวอักษรที่รับมา
//แยกตัวอักษร
//check ตัวอักษรสระ a,e,i,o,u หากเจอสระหนึ่งตัว ให้ข้ามไปอีก 2 ตำแหน่ง 


const input = "zepelepenapa papapripikapa"
let newString = ""
for (let i = 0; i < input.length; ) {
    const char = input[i]
    // console.log(char);

    if(['a','e','i','o','u'].includes(char)){
        newString = newString + char;
        i = i + 3
    }else{
        newString = newString + char;
        i = i + 1
    }

}

console.log(newString);