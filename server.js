const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// app.use(bodyParser.json());
app.use(bodyParser.json());
mongoose.connect("mongodb+srv://gfg:gfg@cluster0.bo6f7hd.mongodb.net/");

const db = mongoose.connection;

db.on("err", () => {console.log("db error") });

db.on("open", () => {console.log("db succesfull") });


app.listen("7000", () => {
    console.log("server is runing on 7000");
});

//require( "../Route/restaurant.routes")(app);
//console.log(path.join(__dirname,) );
app.post("/api/restaurants", restaurantController.create);



// const users = [
//     {
//         id: 1,
//         name:"a",
//         age:"10"
//     },
//     {
//         id: 2,
//         name:"b",
//         age:"20"
//     },
//     {
//         id: 3,
//         name:"c",
//         age:"30"
//     },
//     {
//         id: 4,
//         name:"d",
//         age:"40"
//     },
//     {
//         id: 5,
//         name:"e",
//         age:"50"
//     }
// ]
// app.get("/", (req,res) => {
//   res.send("learning node js");
// });
// // Read users from array
// app.get("/api/user", (req, res) =>{
//     res.send(users);
// });

// // create users or add users
// app.get("/api/user/:id", (req, res) =>{
//     const id = req.params.id;
//     const user = users.find((user) => user.id == id);

//     if(!user){
//         res.status(404).json({message:"user not exist"});
//     }
//     res.send(user)
// });

// app.post("/api/user", (req, res) =>{
//   //  console.log("request",req);
//     const name= req.body.name;
//     const age = req.body.age;

//     const user = 
//         {   id : Math.random() * 10000,
//             name: name,
//             age:age
//         };
    

//     users.push(user);
//     res.json(users);
// });

// //update user
// app.put("/api/user/:id", (req,res) =>{
//     const id = req.params.id;
//     const user = users.find((user) => user.id == id);

//     if(!user){
//         res.status(404).json({message:"id not exits"});
//     }
//     const keys= Object.keys(req.body);

//     keys.forEach((key) => {
//         if(!user[key]){
//          res.status(404).end({message:"key not exists"})
//         }
//     });
//     keys.forEach((key =>{
//         user[key] = req.body[key];
//     }));        
//         res.json(users);
// });
// // delete
// app.delete("/api/user/:id", (req,res) =>{
//    const id = req.params.id;
//    const user = users.find(user => user.id == id);

//    if(!user){
//     res.status(404).json({message:"user not exists"});
//    }
//    const filtereduser = users.filter(user => user.id != id);
//    res.json(filtereduser);

// })