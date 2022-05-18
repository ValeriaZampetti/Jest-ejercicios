let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(USD){
    return USD/1.2*127.9

}

function fromEuroToDollar(Euro){
    return Euro*1.2
}

function YenToPound(JPY){
    return JPY/127.9*0.8
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromDollarToYen, fromEuroToDollar, YenToPound };


