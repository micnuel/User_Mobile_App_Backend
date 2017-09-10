import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  db.collection('users').insertMany([
    { id: 1, surName: 'Okoro', otherName: 'Emmanuel', eMail: 'okoro@student.tut.fi', address:'Väinämöisenkatu 11, Tampere',
      gender:'Male', dob:'30th April 1989', tel: '0417515047',
      imageThumb:'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      imageLarge:'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { id: 2, surName: 'Zilahi', otherName: 'Richard', eMail: 'zilahi@gmail.com', address:'Väinämöisenkatu 11, Tampere',
    gender:'Male', dob:'30th April 1989', tel: '0417515047',
    imageThumb:'https://randomuser.me/api/portraits/thumb/men/81.jpg',
    imageLarge:'https://randomuser.me/api/portraits/men/81.jpg' 
  },
  { id: 3, surName: 'Puttonen', otherName: 'Sami', eMail: 'sami.p@meleti.org', address:'Väinämöisenkatu 11, Tampere',
  gender:'Male', dob:'30th April 1989', tel: '0417515047',
  imageThumb:'https://randomuser.me/api/portraits/thumb/men/80.jpg',
  imageLarge:'https://randomuser.me/api/portraits/men/80.jpg' 
},
{ id: 4, surName: 'Artemova ', otherName: 'Alexandra', eMail: 'alexandra.a@meleti.org', address:'Väinämöisenkatu 11, Tampere',
gender:'Female', dob:'30th April 1989', tel: '0417515047',
imageThumb:'https://randomuser.me/api/portraits/thumb/women/43.jpg',
imageLarge:'https://randomuser.me/api/portraits/women/43.jpg' 
},
{ id: 5, surName: 'Stevens ', otherName: 'Lauren', eMail: 'lauren.s@meleti.org', address:'Väinämöisenkatu 11, Tampere',
gender:'Female', dob:'30th April 1989', tel: '0417515047',
imageThumb:'https://randomuser.me/api/portraits/thumb/women/5.jpg',
imageLarge:'https://randomuser.me/api/portraits/women/5.jpg' 
},
{ id: 6, surName: 'Dimitra ', otherName: 'Panopoulou-Huovila', eMail: 'dimitra.p-h@meleti.org', address:'Väinämöisenkatu 11, Tampere',
gender:'Female', dob:'30th April 1989', tel: '0417515047',
imageThumb:'https://randomuser.me/api/portraits/thumb/women/83.jpg',
imageLarge:'https://randomuser.me/api/portraits/women/83.jpg' 
}
  ]).then (response => {
    console.info('Users', response.insertedCount);
      db.close();
  });
});
