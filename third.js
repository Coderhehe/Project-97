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
  username=localStorage.getItem("username");
  roomname=localStorage.getItem("roomname");
  function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
  }
  function send() {
    msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({
name:username,
message:msg,
likes:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
names=message_data['name'];
message2=message_data['message'];
likes=message_data['likes'];
tick="<h4>"+names+"<img src='tick.png'class='user_tick'> </h4>";
message3="<h4 class='message_h4'>"+message2+"</h4>";
lb="<button class='btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='like(this.id)'>";
tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+likes+"</span> </button>";
row=tick+message3+lb+tag;
document.getElementById("output").innerHTML+=row;
 } });  }); }
getData();
function like(message_id) {
    console.log("You Hit The Like Button");
 button_id=message_id;
 likess=document.getElementById(button_id).value;
nl=Number(likess)+1;
firebase.database().ref(roomname).child(message_id).update({
 likes:nl
});
}
