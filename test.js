const { sum, fromDollarToYen } = require('./app.js');
test('7 and 3 should return 10',() =>  {
    let result = sum(7,3);
    expect(result).toBe(10)
})



test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar to yen", function(){
    const {fromDollarToYen}= require('./app.js')
    const yen = fromDollarToYen[3.5];
    expect(fromDollarToYen(1.2)).toBe(127.9)


})

test ('One yen to Pound', function(){
    const{YenToPound}= require('./app.js')
    expect(YenToPound(127.9)).toBe(0.8)
})
