const express = require('express')
const cors = require('cors')
const { MongoClient } =require('mongodb')
const bcrypt = require('bcrypt')

const app = new express();
app.use(express.json());
//client is runnning in port 3000
//any thord part application can be saved ,if the cors is enabled
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin123@cluster0.6jcgsna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
//outer circle is cluster
//inside cluster is database
//inside database is collection (which is similar to mysql table)
//inside colllection is document (which is similar to mysql table rqo or records)
const db = client.db("skill")
const col =db.collection("user")
const col3 = db.collection("book")

//from browser, the default url triggering is get method
//localhost:8081/home
//1.parameter is address and second parameter is service function

app.get('/home',(req, res) => {
    res.send("It is a Home Page -New Page - New Page2")
})

//1.parameter is address and second parameter is service function
//client is sending req to server which need to take
app.post('/insert', async (req,res)=> {
    //every request will have header and body section
    //req = {header:....., body: actual_data}
    req.body.password = await bcrypt.hash(req.body.password,5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")
})

app.post('/check', async (req, res) =>
{
    console.log(req.body)
    //you can give any key value pairs,every key and value is a condition
    //every key is a database column name which will check check for corresponding value
    var result = await col.findOne({"name":req.body.un})
    if(result != null)
    {
        if(await bcrypt.compare(req.body.pw, result.password))
        {
            res.send(result);
        }
        else {
            res.send("fail")
        }

    }
    else{
        res.send("fail")
    }
})

app.get('/show', async (req, res) => {
    var result = await col.find().toArray();
    console.log(result);
    res.send(result);
})

app.post('/entry', (req,res) => {
    console.log(req.body);
    col3.insertOne(req.body);
    res.send("Successfully Inserted");
})

app.put('/entry', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            bname: req.body.bname,
            genre: req.body.genre,
            author: req.body.author,
            price: req.body.price
        }
    }
    await col3.updateOne({bid:req.body.bid}, doc)
    res.send("Updated Successfully")
})

app.get('/display', async (req,res) => {
    var result = await col3.find().toArray();
    res.send(result);
})

app.delete('/delete', async (req, res) => {
    await col3.deleteOne({bid:req.query.id});
    res.send("deleted");
})

app.listen(8081);
console.log("server Running");