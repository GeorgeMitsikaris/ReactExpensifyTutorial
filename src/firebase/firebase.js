import * as firebase from 'firebase';

const firebaseConfig = {
     apiKey: process.env.FIREBASE_API_KEY,
     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
     databaseURL: process.env.FIREBASE_DATABASE_URL,
     projectId: process.env.FIREBASE_PROJECT_ID,
     storageBucket: process.env.STORAGE_BUCKET,
     messagingSenderId: process.env.MESSAGING_SENDER_ID,
    //  appId: "1:654412406016:web:a0542dee419460a051a7e5"

    //  apiKey: "AIzaSyBnaVI4kBl6ZRiX7PSQIQg-m8aq97wuY_o",
    //  authDomain: "expensify-second-time.firebaseapp.com",
    //  databaseURL: "https://expensify-second-time.firebaseio.com",
    //  projectId: "expensify-second-time",
    //  storageBucket: "expensify-second-time.appspot.com",
    //  messagingSenderId: "654412406016",
    //  appId: "1:654412406016:web:a0542dee419460a051a7e5"
};
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   const database = firebase.database();

export {firebase, database as default};












  //  database.ref('expenses').on('child_added', snapshot => {
  //    console.log(snapshot.val());
  //  })

//    database.ref('expenses').on('child_changed', snapshot => {
//      console.log(snapshot.val());
//    })

//    database.ref('expenses').on('child_removed', snapshot => {
//      console.log(snapshot.val());
//    })

//    database.ref('expenses').on('value', snapshot => {
//         const expenses = [];
//         snapshot.forEach(children => {
//              expenses.push({
//                   id: children.key,
//                   ...children.val() 
//              })
//         })
//         console.log(expenses);
//    })

//    database.ref('expenses').once('value').then(snapshot => {
//         const expenses = [];
//         snapshot.forEach(childSnapshot => {
//              expenses.push({
//                   id: childSnapshot.key,
//                   ...childSnapshot.val()
//              })
//           })
//           console.log(expenses); 
//    })

//    database.ref('expenses').remove();

//    database.ref('expenses').push({
//         description: 'Food',
//         note: 'Buy from super market',
//         amount: 35.24,
//         createdAt: 100
//    })

//    database.ref('expenses').push({
//         description: 'Mobile',
//         note: 'Renew subscription',
//         amount: 12.00,
//         createdAt: 1000
//    })

  //  database.ref('expenses').push({
  //       description: 'Clothes',
  //       note: 'Buy new trousers',
  //       amount: 75.20,
  //       createdAt: 10000
  //  })

//    const onValueChange = database.ref().on('value', (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//    })

//    setTimeout(()=>{
//      database.ref('job/company').set('Amazon')
//    }, 2000)

//    setTimeout(()=>{
//      database.ref().off('value', onValueChange)
//    }, 4000)

//    setTimeout(()=>{
//      database.ref('age').set(52)
//    }, 6000)

//    database.ref('job/title').once('value')
//    .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//    }).catch(e => {
//         console.log('Error: ', e);
//    })
 
//    database.ref().set({
//         name: 'George Mitsikaris',
//         age: 50,
//         stressLevel: 6,
//         job: {
//              title: 'Web Developer',
//              company: 'Google'
//         },
//         location: {
//              city: 'Nea Ionia',
//              street: 'Halkis 49B'
//         }
//    }).then((data)=>{
//      console.log('Data saved');
//    }).catch((e) => {
//         console.log('This failed', e);
//    })

//    database.ref().update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Athens'
//    })

//    database.ref().update({
//         name: 'Petros Kalias',
//         isSingle: null,
//         'location/city': 'Agia Paraskevi'
//    })

// database.ref('isSingle').remove();