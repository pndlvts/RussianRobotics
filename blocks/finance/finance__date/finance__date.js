var date = new Date;
var todayDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
document.querySelector(".finance__date").innerHTML=todayDate;