//การคำนวณ
// 1 รอบกินแบตไปเท่าไร คำนวณ (3 + 0.2) + (1 * (0.2 * 5)) = 1.6
// ถ้า 89% -> (4/1.6%) * 89% = 222.5


function batteryTimeCalculator(percentBattery, standbyTimeDuration, callTimeDuration, standbyBatteryRate, callBatteryRate) {
    let batterReduceStandby = standbyTimeDuration * standbyBatteryRate
    let batterReduceCall = callBatteryRate * callTimeDuration

    let batterReducePerRound = batterReduceStandby + batterReduceCall

    let time = ((standbyTimeDuration + callTimeDuration) / batterReducePerRound) * percentBattery
    return time
}

const timeToUsePhone1 = batteryTimeCalculator(89, 3, 1, 0.2, 0.2 * 5)
console.log(timeToUsePhone1);
