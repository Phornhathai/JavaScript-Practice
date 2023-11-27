//คำนวณระห่างองศาระหว่างเข็มสั้นและเข็มยาว

//30 * 9 = 270 long pin
//30 * 5 = 150 + 22.5 short pin => 172.5 degrees
//ระหว่างเข็มยาวและเข็มสั้นกี่องศา 270 - 172.5 = 92.5

// long pin 60 min =>  short pin 30 degrees
// long pin 1  min =>  short pin 30/60 * 1 = 0.5
// long pin 45 min =>  short pin 45 * 0.5 = 22.5 degress 

function clockDegreeCalculator(time){
    
    let splitedTime = time.split(":")
    let hour = splitedTime[0]
    let minute = splitedTime[1]
    console.log(`hour = ${hour} , minute = ${minute}`);
    let degreeInFiveMinutes = 30 
    let degreeInAMinutes = 6 
    let degreeOfShortInMinute = 0.5

    let longPinDegree = degreeInAMinutes * minute 
    let shortPinDegree = degreeInFiveMinutes * hour + (minute * degreeOfShortInMinute) 

    console.log(`longPinDegree = ${longPinDegree}`);
    console.log(`shortPinDegree = ${shortPinDegree}`);

    let degree = Math.abs(longPinDegree - shortPinDegree)
    if(360 - degree < degree){
        return 360 - degree
    }else{
        return degree
    }

}

console.log(clockDegreeCalculator("09:00"));
console.log(clockDegreeCalculator("00:00"));
console.log(clockDegreeCalculator("01:45"));
console.log(clockDegreeCalculator("02:00"));
console.log(clockDegreeCalculator("05:56"));
console.log(clockDegreeCalculator("09:45"));
