const mongo = require("mongoose")
const express = require("express") // import es6 con day la es5
const app = express()
const port = 8000
const urldb = "mongodb+srv://phuonganhhh2711:leleshop@phuonganh.0swtqos.mongodb.net/"
mongo.connect(urldb).then(function(){
    console.log("connect db success");
})
.catch(function(err){
    console.log(err);
})
app.listen(port, function(){
    console.log("sever đang chạy trên port"+port);
})