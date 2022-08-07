import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";

//add your config details here and uncomment it
const firebaseConfig = {
  // apiKey: ,
  // authDomain: ,
  // databaseURL: ,
  // projectId: ,
  // storageBucket: ,
  // messagingSenderId: ,
  // appId:
  
};

// initialize firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// reference your database
// var contactFormDB = firebase.database().ref("contactForm");


document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  saveMessages(name, emailid, msgContent);
  document.getElementById("contactForm").reset();
}

function saveMessages(name, emailid, msgContent){
  set(ref(database,'Name'+": "+name),{
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  })};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
