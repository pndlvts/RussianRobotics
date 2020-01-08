var date = new Date;
var month = date.getMonth()+1;
var todayDate = date.getDate() + '.' + month + '.' + date.getFullYear();
document.querySelector(".finance__date").innerHTML=todayDate;