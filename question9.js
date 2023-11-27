// สร้าง arr a-z
// แยก string ที่รับ input มาออกเป็นแต่ละตัวก่อน

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let anz = []
let result = ""

function converter(str){
    let splitedStr = str.split('')
    for (const s of splitedStr) {
        // console.log(s);
        if(s != ' '){

            let value = String(s).toLowerCase();
            let index = arr.indexOf(value)
            let char = "" //คู่ตรงข้าม
            if(index <= 12){
                //ชุด A-M
                //index +13
                char = arr[index + 13]
            }else{
                //ชุด N-Z
                //index -13
                char = arr[index - 13]
            }
            anz.push(char)

        }else{
            anz.push(s)
        }

        result = anz.join('')
        
    }
    
    console.log(result);
}

converter("URYYB VAQVN");