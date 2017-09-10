import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  db.collection('users').insertMany([
    { id: 1, surName: 'Okoro', otherName: 'Emmanuel', eMail: 'okoro@student.tut.fi', address:'Väinämöisenkatu 11, Tampere',
gender:'Male', dob:'30th April 1989', tel: '0417515047',
imageThumb:'https://randomuser.me/api/portraits/thumb/men/83.jpg',
imageLarge:'https://randomuser.me/api/portraits/men/83.jpg' },
    
  ]).then (response => {
    console.info('Users', response.insertedCount);
      db.close();
    // });
  });
});
