import express from 'express';
import {MongoClient, ObjectID} from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err,db) =>{
    assert.equal(null, err);
    mdb=db;
});

const router = express.Router();

router.get('/users', (req,res)=>{
  let users={};
  mdb.collection('users').find({})
.project({
  // all
})
   .each((err, user)=>{
    assert.equal(null,err);
    if(!user){
        res.send( {users} );
       
        return;
    }
    users[user._id]=user
   })
});

// router.get('/names/:nameIds', (req,res)=>{
// const nameIds=req.params.nameIds.split(',').map(ObjectID)
//   let names={};
//   mdb.collection('names').find({_id:{ $in: nameIds }})

//    .each((err, name)=>{
//     assert.equal(null,err);
//     if(!name){
//         res.send( {names} );
       
//         return;
//     }
//     names[name._id]=name
//    })
// });

// router.get('/contests/:contestId', (req,res)=>{
//   mdb.collection('contests')
//   .findOne({_id:ObjectID(req.params.contestId)})
//   .then(contest=>{
//       res.send(contest)
//   })
//   .catch(console.error); 
// });

// router.post('/names', (req,res)=>{
//     const contestId =ObjectID(req.body.contestId);
//     const name = req.body.newName;
//     //do a validation yourself!!
//     // if(!name){
//     //     return;
//     // }
//     mdb.collection('names').insertOne({name})
//     .then(result=>{
//         mdb.collection('contests').findAndModify({
//             _id:contestId
//         },
//         [],
//         {$push: {nameIds: result.insertedId}},
//         {new:true})
//         .then(doc=>
//             res.send({
//                 updatedContest:doc.value,
//                 newName:{
//                     _id:result.insertedId,
//                     name:name
//                 }
//             })
//         )
//     })
//     .catch(error=>{
//     console.error(error);
//     res.status(404)
//     .send('Wrong Request!!');
// })
// })




export default router;