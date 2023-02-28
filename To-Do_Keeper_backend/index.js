const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.header({"Access-Control-Allow-Origin": "*"});
  next();
}) 


const url = "mongodb+srv://Quotopedia24:shrajanjain@cluster0.6x9bzfs.mongodb.net/To_Do_List?retryWrites=true&w=majority&ssl=true";

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')

    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
    mongoose.set("strictQuery", false);

const itemSchema = new mongoose.Schema({
 item_name:String,
 item_date:String
});

const Item = mongoose.model("Item",itemSchema);


app.get('/getData',function(req,res){
    Item.find({},function(err,posts){
        if(err){
          console.log(err);
        }
    
        else{
           res.send(posts);
           
        }
      });

    // const person = new Item({
    //     item_name:"chocolate",
    //    item_date: new Date("2022-03-25")

    //   });
    //   person.save(function(err){
    //     if(err){
    //       console.log(err);
    //     }
    //     else{
          
    //       res.send("data inserted");
    //     }
    //   })
});

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post("/postData" , function(req,res){
  // console.log("arrived");
  // if(err) console.log(err);
  // console.log(req.body);
  // res.send("successfull");
  res.send(req.body);
  // console.log(req);
  // console.log(req.body);
  // const month = req.body.item_date.toLocaleString('en-US', { month: 'long' });
  const date = new Date(req.body.item_date);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day =date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  // console.log(month, day , year);

   const person = new Item({
        item_name:req.body.item_name,
       item_date: month+" "+day+" "+year
       

      });
      person.save(function(err){
        if(err){
          console.log(err);
        }
        else{
          
          // res.send("data inserted");
          // console.log("data inserted");
        }
      })
})

app.delete("/delete/:index",function(req,res){
  
  // res.send(req.params.index);
  // console.log(req.params.index);
  const id = req.params.index;
  Item.findByIdAndRemove(id,function(err){
    if(err){
      console.log(err);
    }
    else {
      // console.log("deleted");
      res.json({});
    }
  });
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}


app.listen(port,function(){
  console.log("server has started successfully");
});



