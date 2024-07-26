// let a=new Date();
// let h=a.getHours();
// let m=a.getMinutes();
// let s=a.getSeconds();
// // let d=a.getDay();
// console.log(h,m,s);
setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

},1000);