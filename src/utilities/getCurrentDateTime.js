/* Function to get the date and time and return the string in the format I decide to use in the UI */
export default function getCurrentDateTime() {
    const d = new Date(); 
    function getMonthString(month) {
        switch(month) {
            case 0:
                return "January"
            case 1:
                return "February"
            case 2:
                return "March"
            case 3:
                return "April"
            case 4:
                return "May"
            case 5:
                return "June"
            case 6:
                return "July"
            case 7:
                return "August"
            case 8:
                return "September"
            case 9:
                return "October"
            case 10:
                return "November"
            case 11:
                return "December"
            default:
                return ""
        }
    }
    return `${d.getDate()} ${getMonthString(d.getMonth())} - ${d.getHours()}:${d.getMinutes()}`
}