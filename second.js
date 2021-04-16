var firebaseConfig = {
    apiKey: "AIzaSyCCCdKhTaHUSIOUpSl7mSgMdS2XP_RPShQ",
    authDomain: "project-93-96-62dbe.firebaseapp.com",
    databaseURL: "https://project-93-96-62dbe-default-rtdb.firebaseio.com",
    projectId: "project-93-96-62dbe",
    storageBucket: "project-93-96-62dbe.appspot.com",
    messagingSenderId: "833404659211",
    appId: "1:833404659211:web:09bd27cf8fe38abb73c90e"
  };
  
  firebase.initializeApp(firebaseConfig);
  user=localStorage.getItem("username");
  document.getElementById("husername").innerHTML="Welcome"+user+"!";
  function addroom() {
        roomname=document.getElementById("roomname").value;
  firebase.database().ref("/").child(roomname).update ({
        purpose:"adding room"
  });
  document.getElementById("roomname").value="";
  localStorage.setItem("roomname",roomname); 
  window.location="third.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
  row="<div class='room_name' id="+Room_names+" onclick='rdtrm(this.id)'> #"+Room_names+"</div> <hr>";
  document.getElementById("output").innerHTML+=row;
        });});}
  getData();
  function rdtrm(name) {
  
        console.log(name);
  localStorage.setItem("name",name);
  window.location="third.html";
  }
  function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}