const express = require ('express')
const app = express ()
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/static/home.html');
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname +'/static/contact.html');
});
app.get('/service',(req,res)=>{
    res.sendFile(__dirname +'/static/service.html');
});
const PORT=7000;
app.listen(PORT,(err)=>err?console.error(err) : console.log('server is running on port',PORT));


