
function isAllowedDay(day:number, lastDigit:number) {
    const allowedDays = {
        1: [1, 2],
        2: [3, 4],
        3: [5, 6],
        4: [7, 8],
        5: [9, 0],
    };

    return !allowedDays[day]?.includes(lastDigit);
}

console.log(isAllowedDay(6,11))