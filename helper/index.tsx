
/**
 * Determine start date and end date of the current month
 * @param date is current date
 */
export const determineStartAndEndOfTheMonth = (date: Date) => {
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastMonthEnd = new Date(date.getFullYear(), date.getMonth(), 0);
    const start = new Date( lastMonthEnd.getTime() + (1000 * 60 * 60 * 24));
    return {end, start};
}

/**
 * Separete the month days to weeks
 * @param start is start date of month  
 * @param end is end date of month
 */
export const determineWeeks = (start: Date, end: Date) => {
    const boundsOfWeek = getLastAndFirstDateOfWeek(start);
    let currentDate = boundsOfWeek.first_date;
    const month = [];
    while(currentDate <= end){
        let week = [];
        let day;
        for(let i = 0; i < 7; i++){
            day = currentDate.getDay();
            //if(currentDate > end) break;
            if(day == 0){
                week[6] = currentDate;
                currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24));
                break;
            }else{
                week[day -1] = currentDate;
                currentDate = new Date(currentDate.getTime() + (1000 * 60 * 60 * 24));
            }
        }
        month.push(week);
    }
    return month;
}

/**
 * Determine two dates are equal
 * @param firstDate is date
 * @param secondDate is date
 */
export const areDatesEqual = (firstDate: Date, secondDate: Date) => {
    return firstDate.getFullYear() === secondDate.getFullYear() &&
        firstDate.getMonth() === secondDate.getMonth() &&
        firstDate.getDate() === secondDate.getDate()
}

/**
 * Determine start and end of the date
 * @param current is date
 */
export const getLastAndFirstDateOfWeek = (current: Date) => {
    //var current = new Date();     // get current date
    let day = current.getDay();
    let deleted_day = day - 1;
    if(day == 0) deleted_day = 6;
    let added_day= 7 - day;
    let monday = new Date(current.getTime() - (1000 * 60 * 60 * 24 * deleted_day)); //new Date(current.setDate(weekstart));  
    let sunday = new Date(current.getTime() + (1000 * 60 * 60 * 24 * added_day));//new Date(current.setDate(weekend));
    let result = {
        first_date: monday,
        last_date: sunday,
    }
    return result;
}