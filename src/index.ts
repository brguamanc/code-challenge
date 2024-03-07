function predictor(licensePlate: number, date: string, hour: string) {
    
    const lastDigit: number = parseInt(licensePlate.toString().slice(-1));

    const formattedDate: Date = new Date(`${date} ${hour}`);

    const requestDay: number = formattedDate.getDay();
    const requestHour: number = formattedDate.getHours();
    const requestMinutes: number = formattedDate.getMinutes();
  
    if(isRestrictedHour(requestHour,requestMinutes)){
        return isCirculationDay(requestDay,lastDigit);
    }

    return true;
}

function isRestrictedHour(hour:number,minutes:number){
    return  (hour >= 6 && (hour <= 9 && minutes < 30)) || (hour >= 16 && hour < 21);
}

function isCirculationDay(day:number,lastDigit:number){
    if (
    (day == 1 && (lastDigit == 1 || lastDigit == 2)) ||
    (day == 2 && (lastDigit == 3 || lastDigit == 4)) ||
    (day == 3 && (lastDigit == 5 || lastDigit == 6)) ||
    (day == 4 && (lastDigit == 7 || lastDigit == 8)) ||
    (day == 5 && (lastDigit == 9 || lastDigit == 0)) 
    ){
        return false;
    }
    return true;
}

export default predictor;