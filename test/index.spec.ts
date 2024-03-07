import predictor from '../src/index'
/*
For this test:
2024/03/04 is Monday
2024/03/05 is Tuesday
2024/03/06 is Wednedsay
2024/03/07 is Thursday
2024/03/08 is Friday
2024/03/09 is Saturday
2024/03/10 is Sunday
*/
describe('Cases in which they can not circulate.',()=>{
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9991,"2024/03/04","06:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9992,"2024/03/04","16:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9993,"2024/03/05","07:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9994,"2024/03/05","17:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9995,"2024/03/06","08:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9996,"2024/03/06","18:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9997,"2024/03/07","09:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9998,"2024/03/07","19:00")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9999,"2024/03/08","9:15")).toBeFalsy()
    })
    test('It should return false, the license plate and the time are in restriction.',()=>{
        expect(predictor(9990,"2024/03/08","20:00")).toBeFalsy()
    })

}
)
describe('Cases in which they can circulate.',()=>{
    test('It should return true, the time are not in restriction for this license plate.',()=>{
        expect(predictor(9991,"2024/03/04","05:30")).toBeTruthy()
    })
    test('It should return true, the time are not in restriction for this license plate.',()=>{
        expect(predictor(9991,"2024/03/04","09:50")).toBeTruthy()
    })
    test('It should return true, the time are not in restriction for this license plate.',()=>{
        expect(predictor(9990,"2024/03/08","21:30")).toBeTruthy()
    })
    test('It should return true, the license plate are not in restriction for this day.',()=>{
        expect(predictor(9990,"2024/03/04","08:00")).toBeTruthy()
    })
    test('It should return true, the license plate are not in restriction for this day.',()=>{
        expect(predictor(9991,"2024/03/06","08:00")).toBeTruthy()
    })
    test('It should return true, the license plate are not in restriction for the weekend.',()=>{
        expect(predictor(9991,"2024/03/09","08:00")).toBeTruthy()
    })
    test('It should return true, the license plate are not in restriction for the weekend.',()=>{
        expect(predictor(9991,"2024/03/10","08:00")).toBeTruthy()
    })

}
)


