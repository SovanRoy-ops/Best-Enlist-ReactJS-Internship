/* Write a JavaScript prototype method named begetdatebetween() which extends Date prototype, to find the in between date from start and end date 

Example-
Input - "01/11/2020 , 03/11/2020".begetdatebetween()
Output - 02/11/2020  */

function formatddmmyyyy(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    if (d < 10){
        d = '0' + d;
    }
    if (m < 10){
        m = '0' + m;
    }
    return d +'/'+ m +'/' + y;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

String.prototype.begetdatebetween = function() {
    var dates = this.split(",")
    for(var i=0;i<2;i++){
        dates[i] = dates[i].split('/')
    }
    const startDate = new Date(dates[0][2], dates[0][1]-1, dates[0][0])
    const stopDate = new Date(dates[1][2], dates[1][1]-1, dates[1][0])
    var dateArray = new Array();
    var currentDate = startDate;
    currentDate = currentDate.addDays(1);
    while (currentDate < stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    for (i = 0; i < dateArray.length; i ++ ) {
        console.log(formatddmmyyyy(dateArray[i]));
    }
}

"01/11/2020,03/11/2020".begetdatebetween()
