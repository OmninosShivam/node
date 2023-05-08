// const os = require("os");

// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.type());
// console.log(os.uptime());

// let http=require("http");
// http.createServer((req,res)=>{
//      res.write("hello hii");
//      res.end()
// }).listen(3000,()=>console.log("server start..."));


let express=require("express");
let app=express();

let mysql=require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"framework"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a database named "mydb":*/
   
  });
  
app.listen(3000,()=>console.log("server strat.."));
app.use(express.urlencoded({extended:true}));
app.use(express.text());
app.use(express.json());

app.get("/",(req,res)=>{
   res.send("hello")
})

app.get("/query",(req,res)=>{
    let a=req.query;
    res.send(a);

 })

 let array=[];
 app.get("/params/:name/:age",(req,res)=>{

         let data=req.params; 
     array.push(data)
         res.send(array);
 })

 app.post("/register",async(req,res)=>{
      let data=await req.body;
      var sql =await `INSERT INTO users (name, age) VALUES ('${data.name}', ${data.age})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    if(result){

        console.log("1 record inserted");
    }else{
        console.log("err")
    }
  });
      res.send({"status" : "1", "messsage" : "user register success", "details" : data})
 });

 