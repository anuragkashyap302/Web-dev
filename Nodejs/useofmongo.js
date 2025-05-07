let express = require("express");
const { dbconnection } = require("./dbconnection");
const { ObjectId } = require("mongodb");
let app = express();

app.use(express.json());
// mongo se res bhi le sakte hai jjo chhaiye
app.get("/student-read" , async (req ,res)=>{
    let mydb = await dbconnection();
    let collectionforvs = mydb.collection("vscode");
    // data jo collectionfor vs namak databse me hai usko lete ao and arrry format me kar do
    let data = await collectionforvs.find().toArray();
    let resobj = {
        status:1,
        msg:"student list",
        data
    }
    res.send(data)
    // output aisa hi aayega fornted me backend se res aaya hai
    // [
    //     {
    //       "_id": "67e953eb46109c2eb36da526",
    //       "name": "anurag",
    //       "email": "anu123"
    //     }
    //   ]
})
// data mongo me ane jane wala to async and await use 
app.post("/student-insert", async (req , res)=>{
    let mydb = await dbconnection();
    // database durse file me banke importe and collection yaha bana lo
    let collectionforvs = mydb.collection("vscode");
// ye obj request ki body se le rahe hai jo ki froted se aaya hoga
    let obj = {
        name:req.body.name,
        email:req.body.email,
    }
    console.log(obj);
    // let {name , email} = req.body; // ek sath bhi dono ko le stakte ho requset ke body se
    // ab isko backend me bhej do

     // agr cheate ho saem email dubara entry na ho to if condition
     let checkemail = await collectionforvs.findOne({email})
     // agara ye email to return 
     if(checkemail){
        return res.send({status:0 , msg:"ye phle se para hua hai bhai dusra try kar"})
     }
    let insertres = await collectionforvs.insertOne(obj);
    let resobj = {
        status:1,
        msg:"data insert thruogh vs code directly",
        insertres
    }
   
    res.send(resobj)
    // asia chhez milaga ki data jaa chuka you can chek it thorung thunderblut 
    // {
    //     "status": 1,
    //     "msg": "data insert thruogh vs code directly",
    //     "insertres": {
    //       "acknowledged": true,
    //       "insertedId": "67e953eb46109c2eb36da526"
    //     }
    //   }
})
// you can delete and update the colection by giveing param as id or any unqiue
// phle api banaya dlete ka use karke same as get and post ant then forward

app.delete("/student-delete/:id" ,async (req, res)=>{
    let {id} = req.params; // ye id aayega tumrahe pass 
    console.log(id); // you can verify id-67e953eb46109c2eb36da526
    let mydb = await dbconnection();
    let collectionforvs = mydb.collection("vscode");
    let delres = await collectionforvs.deleteOne({_id:new ObjectId(id)})
    let resobj = {
        status:1,
        msg:"data delete thruogh vs code directly",
        delres
    }
    // ab tunderclinet me jake url hit karo and id dedo param ke jagah kaam ho jayega
    // output
    // {
    //     "status": 1,
    //     "msg": "data delete thruogh vs code directly",
    //     "delres": {
    //       "acknowledged": true,
    //       "deletedCount": 1
    //     }
    //   }
    res.send(resobj)
})

// you can update the clloection aslo so first insert by using above insert url in thenderbout and it will update in mongdb
//now you cna update the thing by process

app.put("/student-update/:id", async (req, res)=>{
  // ab id and data le aao req se backend se maag lo and usko update
  let {id} = req.params; // where to change
  let {name , email} = req.body;
   let obj = {name , email} // data
   let mydb = await dbconnection();
   let collectionforvs = mydb.collection("vscode");
   let updateres = await collectionforvs.updateOne({_id:new ObjectId(id)},{$set:{name , email}})
   let resobj = {
    status:1,
    msg:"data update thruogh vs code directly",
    updateres
}
// ab thunderclient me jaaye body me name and email updated dal ke put method se ye url hit kare mongo me data change ho jayega
// outpupt one thing remeber you have to keep updated data in body of thunderclient 
// real me to react based me hoaga yaha thuderclikent kahai feel dene ke liye hai so use acc to thant
// {
//     "status": 1,
//     "msg": "data update thruogh vs code directly",
//     "updateres": {
//       "acknowledged": true,
//       "modifiedCount": 1,
//       "upsertedId": null,
//       "upsertedCount": 0,
//       "matchedCount": 1
//     }
//   }


// agar koi ek chhiz hi update karna ho to if conditin daal lo
let obj2 = {}
// agar kisi ne nam nahi dala updataion ke liye to obj banega hi nahi and updtae hoga hi nahi
if(name!=="" && name!==undefined && name!== null){
    obj2['name'] = name;
}
if(email!=="" && email!==undefined && email!== null){
    obj2['email'] = email;
}
// repate teh above process of updateiing and send obj2 insted of {name , email};
// let mydb = await dbconnection();
//    let collectionforvs = mydb.collection("vscode");
//    let updateres = await collectionforvs.updateOne({_id:new ObjectId(id)},{$set:obj2})
 res.send(resobj)
 
})

app.listen(8000);