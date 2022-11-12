// // console.log("lo world");
// // const mongoose = require('mongoose')
// const URL = 'mongodb+srv://user:user@sandbox.wne6gze.mongodb.net/?retryWrites=true&w=majority';

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(
// //       URL,
// //       { useNewUrlParser: true, useUnifiedTopology: true }
// //     )
// //     console.log('Connected to mongoDB')
// //   } catch (error) {
// //     console.log(error)
// //     process.exit(1)
// //   }
// // }

// // connectDB()
// var url = "mongodb://localhost:27017/";
// var mongoClient = require('mongodb').MongoClient;
// mongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     //use product collection
// //     // var products = db.collection('products');



// // function createSeller(){
//     var dbo = db.db("nmcnpm_database");
//     var seller = dbo.collection("seller");
//     var data = {
//         "id":"10",
//         "name":"Romano VietNam",
//         "phone number":"0232424",
//         "bank account number":"343435",
//         "address":{
//             "country":"Viet Nma",
//             "province/city":"sai gon",
//             "district":"1",
//             "ward":"4",
//             "specific address":"435435fgfbfg"
//         },
//         // "product":{"$numberLong":"32432"},
//         // "followers":{"$numberLong":"4353"},
//         // "following":{"$numberLong":"43"},
//         // "rating":{"$numberDouble":"4.9"},
//         // "sum vote":{"$numberLong":"34"},
//         // "chat performance":"99%",
//         "joined ":{"$date":{"$numberLong":new Date()}}
//     }
//     seller.insertOne(data, function(err,res){
//         if (err) throw err;
//         console.log('Them thanh cong');
//     });
//     db.close();
// });

var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
var url = 'mongodb+srv://user:user@sandbox.wne6gze.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("nmcnpm_database");
    var seller = dbo.collection("seller");
    var data = {
        "id":"10",
        "name":"Romano VietNam",
        "phone number":"0232424",
        "bank account number":"343435",
        "address":{
            "country":"Viet Nma",
            "province/city":"sai gon",
            "district":"1",
            "ward":"4",
            "specific address":"435435fgfbfg"
        },
        // "product":{"$numberLong":"32432"},
        // "followers":{"$numberLong":"4353"},
        // "following":{"$numberLong":"43"},
        // "rating":{"$numberDouble":"4.9"},
        // "sum vote":{"$numberLong":"34"},
        // "chat performance":"99%",
        "joined ":{"$date":{"$numberLong":new Date()}}
    }
    seller.insertOne(data, function(err,res){
        if (err) throw err;
        console.log('Them thanh cong');
        db.close();
    });
    // db.close();
});