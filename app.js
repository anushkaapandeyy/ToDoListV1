const express  = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();

let work=[];
let tasks = ["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//date
app.get("/", function(req, res){


let day = date();
    res.render("list", {
      listtitle: day, newListItems: tasks});
});

//new item adding to list
app.post('/', function(req,res){
  var task = req.body.newItem;

if(req.body.list === "work"){
  work.push(task);
  res.redirect("/work");
}
else{
  items.push(task);
  res.redirect("/");
}
});

//work list page
app.get("/work", function(req,res){
  res.render("list",{listtitle: "work list", newListItems: work});
});

app.post("/work",function(req,res){
  let item = req.body.newListItem;
  work.push(item);
  res.redirect("/work");
});
app.get("/about",function(req,res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("server started on port 3000");
});
