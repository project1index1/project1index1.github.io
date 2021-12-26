function refresh(){


let realData = new Date();

let year = realData.getFullYear();
let mont = realData.getMonth() + 1;
let day = realData.getDate();
let hour = realData.getHours();
let minute = realData.getMinutes();
let secund = realData.getSeconds();
// console.log(year ,mont , day ,hour ,minute, secund );
// document.getElementById("year_div").innerHTML =year;


////// Dead Line ///////

let d_year = 2022;
let d_mont = 12;
let d_day = 31;
let d_hour = 23;
let d_minute = 60;
let d_secund = 60;


//////// count //////////

let c_year = d_year -  (year + 1);
let c_mont =  d_mont - mont;
let c_day = d_day - day;
let c_hour = d_hour - hour;
let c_minute = d_minute - minute;
let c_secund = d_secund - secund;


//////////// print //////////

document.getElementById("year_div").innerHTML = c_year;
document.getElementById("month_div").innerHTML = c_mont;
document.getElementById("day_div").innerHTML = c_day;
document.getElementById("hour_div").innerHTML = c_hour;
document.getElementById("minute_div").innerHTML = c_minute;
document.getElementById("secund_div").innerHTML = c_secund;


};


let timer = setInterval(refresh , 1000);