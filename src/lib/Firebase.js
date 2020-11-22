import Firebase from 'firebase';
// import React from 'react';

const config = {
  apiKey: "AIzaSyDQLQYBI8C7Ya13pv8ibtrKqCt-YFkKuv8",
  authDomain: "githubpage-fa457.firebaseapp.com",
  databaseURL: "https://githubpage-fa457.firebaseio.com",
}
try {
  Firebase.initializeApp(config);
}
catch (e) {
  console.error(e)
}
const getProjects = async () => {
  var database = Firebase.database();
  var starCountRef = database.ref('Jobs');
  return new Promise((resolve, reject) => {
    starCountRef.on('value', function (snapshot) {
      const data = snapshot.val();
      if (!data) reject([]);
      console.log(data);
      let projects = [];
      Object.entries(data).forEach(item => {
        projects = [...projects, ...item[1].projects]
      });
      resolve(projects || [])
    })
  })
}
const getBasicInfo = async () => {
  var database = Firebase.database();
  var starCountRef = database.ref('basicInfo');
  return new Promise((resolve, reject) => {
    starCountRef.on('value', function (snapshot) {
      const data = snapshot.val();
      console.log("basic data", data);
      if (!data) reject([]);
      console.log(data);
      resolve(data)
    })
  })
}
export { getProjects, getBasicInfo };
