function dayOfWeek(day){
    
    let validDay;

    switch (day) {
        case 'Monday':
            validDay = 1;
            break;
        case 'Tuesday':
            validDay = 2;
            break;
        case 'Wednesday':
            validDay = 3;
            break;    
        case 'Thursday':
            validDay = 4;
            break;
        case 'Friday':
            validDay = 5;
            break;
        case 'Saturday':
            validDay = 6;
            break; 
        case 'Sunday':
            validDay = 7;
            break; 

        default:
        console.log('error');
            break;
    }

    return validDay;
}

console.log(dayOfWeek('Monday'))