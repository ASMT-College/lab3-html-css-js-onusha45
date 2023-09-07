function showDateandTime(){
document.getElementById("display_clock").innerHTML=Date();
}
showDateandTime();
setInterval(showDateandTime,1000);

function showClock() {
    var todayDate=new Date();
    var hour=todayDate.getHours();
    var minute=todayDate.getMinutes();
    var second=todayDate.getSeconds();
    document.getElementById("display_newtime").innerHTML=hour+":"+minute+":"+second;
    }
   setInterval(showClock,1000);
