//จำนวนเฉพาะ คือ เลขที่หาร 1 กับตัวเองลงตัวเท่านั้น
//เอาเลข 1 - 34 ไปหาร 34 มีเงื่อนไขว่า หาร 1 และตัวมันเองหารลงตัว
let input = 25

const isPrimeNumber = (num) => {
    let isPrimeNumber = true;
    for (let i = 2; i < num; i++) {
        // console.log(i);
        if (num % i == 0) { //ถ้าหารลงตัวด้วยเลข 2 หรือ < เลขที่รับเข้ามา จะไม่ใช่เลขจำนวนเฉพาะ
            isPrimeNumber = false;
            break;
        }
    }
    // return console.log(`${num} เป็นจำนวนเฉพาะ ${isPrimeNumber}` );
    return isPrimeNumber;
}

for (let i = 1; i <= input; i++) {
    // console.log(i);
    if (isPrimeNumber(i)) {
        console.log(i);
    }
}



