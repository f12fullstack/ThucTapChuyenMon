const mongo = require("mongoose")
const express = require("express") // import es6 con day la es5
const app = express()
const port = 8000
const urldb = "mongodb+srv://phuonganhhh2711:leleshop@phuonganh.0swtqos.mongodb.net/"
const productRoute = require("./Routes/productRoute")
const bodyParser = require('body-parser')
const cors = require('cors')
mongo.connect(urldb).then(function(){
    console.log("connect db success");
})
.catch(function(err){
    console.log(err);
})
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json())
app.use("/api/product",productRoute)
app.get('/', (req, res)=> {
    res.send("Api is running...")
})
app.listen(port, function(){
    console.log("sever đang chạy trên port"+port);
})
