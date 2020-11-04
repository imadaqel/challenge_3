
var express = require('express');
//app.use(express.static('client');
var app = express();


app.use(express.json());
app.use(express.urlencoded());
// app.post('/',function(req,res){
//     // make JSON strengify fr Objec
//    
//  console.log(response,req.body);  


//  });
app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.render("index")
})
app.listen(3000, function () {
    console.log("server at localhost:3000");
})