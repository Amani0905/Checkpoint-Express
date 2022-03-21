const express = require ('express');
const app = express ();
const timeRequest=(req,res,next)=>{
    const day = new Date().getDay();
    const hour = new Date().getHours();
  ;
    if ((1 < day),(day<6)&&(hour>9),(hour<22)){
        next();
    } else {
        res.send('The web application is only available during working hours (Monday to Friday,  from 9 to 17)');
    }
};
app.use(timeRequest);

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/static/home.html');
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname +'/static/contact.html');
});
app.get('/service',(req,res)=>{
    res.sendFile(__dirname +'/static/service.html');
});
//app.get('/css/style.css',(req,res)=>{
//    res.sendFile(__dirname+'/static/css/style.css');//
//});//
app.use(express.static(__dirname+'/static'));

const PORT=1000;
app.listen(PORT,(err)=>err?console.error(err) : console.log('server is running on port',PORT));


