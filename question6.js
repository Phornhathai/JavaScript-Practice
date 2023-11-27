
//เพราะว่าระหว่างคำจะมีช่องว่างเท่ากับ 1 
//ดังนั้นจึงเอาจำนวนคำไปลบ 1 เพื่อให้ได้ช่องว่าง

function findSpace(params) {
    let split = params.split(" ")
    console.log("split" , split);
    let lengOfSpace = split.length - 1
    return lengOfSpace
    
    
}

console.log(findSpace("My name is bob"));
