var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var ampm =  document.getElementById('ampm');
function updateTime()
{
    let ampm1 = "AM";
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h<10?"0"+h:h;
    m = m<10?"0"+m:m;
    s = s<10?"0"+s:s;
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;
    ampm.innerHTML=ampm1;
    if(h>12)
    {
        // h = h-12; for converting 24 hr to 12 hr format
        // hour.innerHTML=h;
        ampm1 = "PM";
        ampm.innerHTML=ampm1;
    }
    setTimeout(()=>{
        updateTime()
    },1000);
}
updateTime();